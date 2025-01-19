import { onMounted, onBeforeUnmount } from "vue";

export function cardEffect(selector) {
  const handleMouseEnter = (event) => {
    const target = event.target;

    if (target.matches(selector)) {
      let rect = target.getBoundingClientRect();

      const handleMouseMove = (moveEvent) => {
        rect = target.getBoundingClientRect();
        const mouseMoveX = moveEvent.clientX - rect.left;
        const mouseMoveY = moveEvent.clientY - rect.top;

        const maxX = rect.width; // Largeur de la carte
        const rotateY = (mouseMoveX / maxX - 0.5) * 10;
        const rotateX = (mouseMoveY / rect.height - 0.5) * 10;

        target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg) rotateZ(0deg)`;
      };

      target.addEventListener("mousemove", handleMouseMove);

      target.addEventListener("mouseout", () => {
        target.style.transform = "";
      });
    }
  };

  document.addEventListener("mouseenter", handleMouseEnter, true);
}
