import { isValidBrackets } from "./isValidBrackets.js";

export function handleSubmit(e: Event): boolean {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const inputElement = form.elements.namedItem("brackets") as HTMLInputElement;
  const input = inputElement.value;

  if (input === "") {
    (document.getElementById("bracketsResult") as HTMLElement).innerText =
      "Ошибка: Строка не содержит скобок.";
    return false;
  }

  const isValid = isValidBrackets(input);

  const resultElement = document.getElementById(
    "bracketsResult"
  ) as HTMLElement;
  resultElement.innerText = `Введённая строка: "${input}"\nРезультат: ${
    isValid ? "Скобки парны" : "Скобки не парны"
  }`;

  return false;
}
