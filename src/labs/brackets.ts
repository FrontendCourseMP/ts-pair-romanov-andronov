import { handleSubmit } from "../brackets/handleSubmit.js";

// Экспортируем функцию в глобальную область
declare global {
  interface Window {
    handleSubmit: (e: Event) => boolean;
  }
}

window.handleSubmit = handleSubmit;
