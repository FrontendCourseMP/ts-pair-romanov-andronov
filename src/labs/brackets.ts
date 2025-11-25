import { handleSubmit } from "../brackets/handleSubmit.js";

const form = document.getElementById('bracketsForm');
if (form) {
  form.addEventListener('submit', handleSubmit);
}