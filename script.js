const form = document.getElementById('rsvpForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  // Пока данные сохраняются на устройстве.
  // Позже сюда можно подключить Google Apps Script и отправлять ответы в таблицу.
  localStorage.setItem('birthday_rsvp', JSON.stringify({
    ...data,
    sentAt: new Date().toISOString()
  }));

  message.textContent = 'Спасибо! Ваш ответ сохранён.';
  form.reset();
});
