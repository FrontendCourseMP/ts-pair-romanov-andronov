export interface Time {
    hours: number
}

interface TimeCalculator {
  calculateNewArrivalTime(scheduledTime: string, hoursDelay: number): string;
}

declare const TimeCalculator: TimeCalculator;

function calculateTime(): void {
  const scheduledTimeInput = document.getElementById("scheduledTime") as HTMLInputElement;
  const hoursDelayInput = document.getElementById("hoursDelay") as HTMLInputElement;
  const resultDiv = document.getElementById("result") as HTMLElement;

  if (!scheduledTimeInput || !hoursDelayInput || !resultDiv) {
    console.error("Не все элементы найдены в DOM");
    return;
  }

  const scheduledTime: string = scheduledTimeInput.value;
  const hoursDelay: number = parseInt(hoursDelayInput.value, 10);

  if (isNaN(hoursDelay)) {
    resultDiv.innerHTML = "Ошибка: Введите корректное количество часов задержки";
    resultDiv.className = "result error";
    resultDiv.style.display = "block";
    return;
  }

  try {
    const newTime: string = TimeCalculator.calculateNewArrivalTime(
      scheduledTime,
      hoursDelay
    );

    resultDiv.innerHTML = `
      Время по расписанию: <strong>${scheduledTime}</strong><br>
      Часов опоздания: <strong>${hoursDelay}</strong><br>
      Новое время прибытия: <strong>${newTime}</strong>
    `;
    resultDiv.className = "result success";
    resultDiv.style.display = "block";
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Неизвестная ошибка";
    resultDiv.innerHTML = `Ошибка: ${message}`;
    resultDiv.className = "result error";
    resultDiv.style.display = "block";
  }
}