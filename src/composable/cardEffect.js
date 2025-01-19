import { onMounted, onBeforeUnmount } from 'vue';

export function cardEffect(selector) {
  const handleMouseEnter = (event) => {
    const target = event.target;

    if (target.matches(selector)) {
      const rect = target.getBoundingClientRect(); 
      const mouseX = event.clientX - rect.left; 
      const mouseY = event.clientY - rect.top;  

      const handleMouseMove = (moveEvent) => {
        const mouseMoveX = moveEvent.clientX - rect.left;
        const mouseMoveY = moveEvent.clientY - rect.top;

         const maxX = rect.width; // Largeur de la carte
        const rotateY = ((mouseMoveX / maxX) - 0.5) * 40; // -20 à 20 en fonction de la position de la souris
        const rotateX = ((mouseMoveY / rect.height) - 0.5) * 20; // Val


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
