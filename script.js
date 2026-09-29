function calculateAge() {
  const birthDateInput = document.getElementById("birthdate").value;
  const resultDiv = document.querySelector(".result");

  if (!birthDateInput) {
    resultDiv.textContent = "Введите дату рождения!";
    return;
  }

  const birthDate = new Date(birthDateInput);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  resultDiv.textContent = `Ваш возраст: ${age} лет`;
}

document.getElementById("calcBtn").addEventListener("click", calculateAge);


