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
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let musicPlaying = false;

musicBtn.addEventListener('click', async () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicPlaying = false;
  } else {
    try {
      await bgMusic.play();
      musicBtn.classList.add('playing');
      musicPlaying = true;
    } catch (error) {
      console.log('Не удалось запустить музыку:', error);
    }
  }
});
const envelopeScreen = document.getElementById('envelopeScreen');
const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {

  envelope.classList.add('open');

  setTimeout(() => {
    envelopeScreen.classList.add('hide');
  }, 1400);

});
