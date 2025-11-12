const inputElement = document.getElementById('textInput') as HTMLInputElement;

inputElement.addEventListener('input', () => {
  console.log('Текущий ввод:', inputElement.value);
});