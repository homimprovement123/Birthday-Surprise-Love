document.addEventListener("DOMContentLoaded", function () {

  const gift = document.getElementById("gift");
  const hiddenMessage = document.getElementById("hiddenMessage");

  if (gift && hiddenMessage) {

    gift.addEventListener("click", function () {

      hiddenMessage.classList.add("show");

      gift.style.transform = "scale(0.9)";

      createConfetti();

      setTimeout(function () {
        hiddenMessage.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 200);

    });
  }

  function createConfetti() {

    const symbols = ["✦", "✧", "♥", "★", "♡"];

    for (let i = 0; i < 35; i++) {

      const confetti = document.createElement("div");

      confetti.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-20px";
      confetti.style.fontSize = Math.random() * 15 + 12 + "px";
      confetti.style.zIndex = "9999";
      confetti.style.pointerEvents = "none";

      document.body.appendChild(confetti);

      const duration = Math.random() * 2000 + 2000;

      confetti.animate(
        [
          {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform:
              "translateY(110vh) rotate(" +
              Math.random() * 720 +
              "deg)",
            opacity: 0
          }
        ],
        {
          duration: duration,
          easing: "ease-out"
        }
      );

      setTimeout(function () {
        confetti.remove();
      }, duration);
    }
  }

});
