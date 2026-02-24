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

  function render(idx) {
    const t = items[idx];
    quoteEl.innerHTML = "";

    const paragraphs = t.quote.split(/\n\s*\n/);
    paragraphs.forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      quoteEl.appendChild(el);
    });

    attribEl.textContent = `- ${t.name}, ${t.role}`;
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
  startRotation();

  // Pause on hover (desktop only behavior).
  cardEl.addEventListener("mouseenter", stopRotation);
  cardEl.addEventListener("mouseleave", startRotation);
})();
