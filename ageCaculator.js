// Obtenha todos os elementos necessários
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const submitBtn = document.getElementById('submit-btn');
const solutionYear = document.getElementById('solution-year');
const solutionMonth = document.getElementById('solution-month');
const solutionDay = document.getElementById('solution-day');

// Adiciona um Event Listener ao botão 'submit'
submitBtn.addEventListener('click', () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);
  
  // Limpa mensagens de erro anteriores
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(errorMessage => {
    errorMessage.textContent = '';
  });
  
  // Verifica se as entradas estão vazias
  if (!day || !month || !year) {
    // Exibe uma mensagem de erro se alguma entrada estiver vazia
    const errorMessage = document.getElementById('error-empty');
    errorMessage.textContent = 'This field is required';
    return;
  } 
  
  // Verifica se é uma data válida
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, day);
  // Último dia do mês
  const maxDay = new Date(year, month, 0).getDate(); 
  
  if (day > maxDay) {
    const errorMessage1 = document.getElementById('error-invalid');
    errorMessage1.textContent = 'Must be a valid day';
    return;
  } 
  
  if (month > 12) {
    const errorMessage2 = document.getElementById('error-invalid');
    errorMessage2.textContent = 'Must be a valid month';
    return;
  } 
  
  if (year > currentDate.getFullYear()) {
    const errorMessage3 = document.getElementById('error-invalid');
    errorMessage3.textContent = 'Must be in the past';
    return;
  }
  
  if (inputDate > currentDate) {
    const errorMessage4 = document.getElementById('error-whole-form');
    errorMessage4.textContent = 'Must be a valid date';
    return;
  }

  // Calcula a idade
  let ageYear = currentDate.getFullYear() - inputDate.getFullYear();
  let ageMonth = currentDate.getMonth() - inputDate.getMonth();
  let ageDay = currentDate.getDate() - inputDate.getDate();
  
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
  }
  
  if (currentDate.getMonth() < inputDate.getMonth()) {
    ageYear--;
    ageMonth += 12;
  }

  if (ageDay < 0) {
    const monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    ageDay += monthDays;
    ageMonth--;
  }

  // Exibe o resultado
  solutionYear.textContent = ageYear;
  solutionMonth.textContent = ageMonth;
  solutionDay.textContent = ageDay;
});
