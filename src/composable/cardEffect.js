import { onMounted, onBeforeUnmount } from 'vue';

export function cardEffect(selector) {
  const handleMouseEnter = (event) => {
    const target = event.target;

    if (target.matches(selector)) {
      const rect = target.getBoundingClientRect(); 
      const mouseX = event.clientX - rect.left; 
      const mouseY = event.clientY - rect.top;  

      console.log("X : "+mouseX);
      console.log("Y : "+mouseY);

      const handleMouseMove = (moveEvent) => {
        const mouseMoveX = moveEvent.clientX - rect.left;
        const mouseMoveY = moveEvent.clientY - rect.top;
        console.log("X : "+mouseMoveX);
        console.log("Y : "+mouseMoveY);
      };

      target.addEventListener("mousemove", handleMouseMove);

    }
  };

  document.addEventListener("mouseenter", handleMouseEnter, true);
}
