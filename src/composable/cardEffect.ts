import { onMounted, onBeforeUnmount } from "vue";

export function cardEffect(selector: string): void {
  const handleMouseEnter = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target && target.matches(selector)) {
      let rect = target.getBoundingClientRect();

      const handleMouseMove = (moveEvent: MouseEvent) => {
        rect = target.getBoundingClientRect();
        const mouseMoveX = moveEvent.clientX - rect.left;
        const mouseMoveY = moveEvent.clientY - rect.top;

        const maxX = rect.width;
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

  onMounted(() => {
    document.addEventListener("mouseenter", handleMouseEnter, true);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("mouseenter", handleMouseEnter, true);
  });
}
