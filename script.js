const gift = document.getElementById("gift");
const finalMessage = document.getElementById("finalMessage");

if (gift && finalMessage) {

  gift.addEventListener("click", () => {

    gift.classList.add("opened");

    finalMessage.classList.add("show");

    // Birthday confetti
    for (let i = 0; i < 45; i++) {

      const piece = document.createElement("span");

      piece.textContent =
        ["♥", "✦", "✧", "♡", "★"]
        [Math.floor(Math.random() * 5)];

      piece.style.position = "fixed";

      piece.style.left =
        Math.random() * 100 + "vw";

      piece.style.top = "-20px";

      piece.style.zIndex = "9999";

      piece.style.pointerEvents = "none";

      piece.style.fontSize =
        (12 + Math.random() * 15) + "px";

      piece.style.color = "#e83f7d";

      document.body.appendChild(piece);

      const duration =
        1800 + Math.random() * 1800;

      piece.animate(
        [
          {
            transform:
              "translateY(0) rotate(0deg)",

            opacity: 1
          },

          {
            transform:
              `translateY(110vh) rotate(${Math.random() * 720 - 360}deg)`,

            opacity: 0
          }
        ],

        {
          duration: duration,

          easing: "ease-out"
        }
      );

      setTimeout(() => {
        piece.remove();
      }, duration);

    }

    setTimeout(() => {

      finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 250);

  });

}
