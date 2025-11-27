import { ref, onMounted, onUnmounted } from "vue";

export default function () {
  const isPortrait = ref(window.innerHeight > window.innerWidth);

  const update = () => {
    isPortrait.value = window.innerHeight > window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
    window.removeEventListener("orientationchange", update);
  });

  return isPortrait;
}
