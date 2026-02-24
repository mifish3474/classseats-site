(function () {
  const items = window.CLASSSEATS_TESTIMONIALS || [];
  if (!items.length) return;

  const quoteEl = document.getElementById("tQuote");
  const attribEl = document.getElementById("tAttrib");
  const cardEl = document.getElementById("tCard");
  if (!quoteEl || !attribEl || !cardEl) return;

  const canAnimate = typeof cardEl.animate === "function";
  const FADE_MS = 900;

  let i = 0;
  let intervalId;
  let busy = false;
  let resizeTimer;

  function writeTestimonial(targetQuoteEl, targetAttribEl, idx) {
    const t = items[idx];
    targetQuoteEl.innerHTML = "";

    const paragraphs = t.quote.split(/\n\s*\n/);
    paragraphs.forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      targetQuoteEl.appendChild(el);
    });

    targetAttribEl.textContent = `- ${t.name}, ${t.role}`;
  }

  function render(idx) {
    writeTestimonial(quoteEl, attribEl, idx);
  }

  function lockCardHeight() {
    const width = cardEl.getBoundingClientRect().width;
    if (!width) return;

    const measureCard = cardEl.cloneNode(true);
    measureCard.removeAttribute("id");
    measureCard.classList.remove("is-hidden");
    measureCard.classList.add("is-visible");
    measureCard.style.position = "fixed";
    measureCard.style.left = "-9999px";
    measureCard.style.top = "-9999px";
    measureCard.style.width = `${width}px`;
    measureCard.style.minHeight = "0";
    measureCard.style.opacity = "1";
    measureCard.style.transition = "none";
    measureCard.style.pointerEvents = "none";

    const measureQuoteEl = measureCard.querySelector(".t-quote-wrapper");
    const measureAttribEl = measureCard.querySelector(".t-attrib");
    if (!measureQuoteEl || !measureAttribEl) return;

    document.body.appendChild(measureCard);

    let maxHeight = 0;
    for (let idx = 0; idx < items.length; idx += 1) {
      writeTestimonial(measureQuoteEl, measureAttribEl, idx);
      const nextHeight = measureCard.offsetHeight;
      if (nextHeight > maxHeight) maxHeight = nextHeight;
    }

    measureCard.remove();

    if (maxHeight > 0) {
      cardEl.style.minHeight = `${maxHeight}px`;
    }
  }

  function fadeSwap(nextIdx) {
    if (!canAnimate) {
      cardEl.classList.remove("is-visible");
      cardEl.classList.add("is-hidden");
      setTimeout(() => {
        render(nextIdx);
        cardEl.classList.remove("is-hidden");
        cardEl.classList.add("is-visible");
      }, FADE_MS);
      return;
    }

    busy = true;
    cardEl.getAnimations().forEach((a) => a.cancel());

    cardEl
      .animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: FADE_MS,
        easing: "ease-in-out",
        fill: "forwards"
      })
      .finished.then(() => {
        render(nextIdx);
        return cardEl.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: FADE_MS,
          easing: "ease-in-out",
          fill: "forwards"
        }).finished;
      })
      .finally(() => {
        busy = false;
      });
  }

  function next() {
    if (busy) return;
    const nextIdx = (i + 1) % items.length;
    fadeSwap(nextIdx);
    i = nextIdx;
  }

  function startRotation() {
    clearInterval(intervalId);
    intervalId = setInterval(next, 7000);
  }

  function stopRotation() {
    clearInterval(intervalId);
  }

  render(i);
  lockCardHeight();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(lockCardHeight).catch(() => {});
  }

  function scheduleHeightLock() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(lockCardHeight, 150);
  }

  window.addEventListener("resize", scheduleHeightLock);
  window.addEventListener("orientationchange", scheduleHeightLock);

  startRotation();

  // Pause on hover (desktop only behavior).
  cardEl.addEventListener("mouseenter", stopRotation);
  cardEl.addEventListener("mouseleave", startRotation);
})();
