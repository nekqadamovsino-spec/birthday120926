const form = document.getElementById('rsvpForm');
const message = document.getElementById('formMessage');

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfBy0jT3YsosWgAPRXGtoDZT-M9vCf7apjM4bnr3iLl8AdGJnXVKbtjc-d7gY_-IUCsg/exec';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  message.textContent = 'Отправляем...';

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    message.textContent = 'Спасибо! Ваш ответ отправлен.';
    form.reset();

  } catch (error) {
    console.error(error);
    message.textContent = 'Ошибка отправки. Попробуйте ещё раз.';
  }
});
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let musicPlaying = false;

async function startMusic() {
  try {
    await bgMusic.play();
    musicPlaying = true;
    musicBtn.classList.add('playing');
  } catch (e) {
    console.log('Автозапуск музыки заблокирован браузером');
  }
}

function stopMusic() {
  bgMusic.pause();
  musicPlaying = false;
  musicBtn.classList.remove('playing');
}

/* Ручная кнопка */
musicBtn.addEventListener('click', async (e) => {
  e.stopPropagation();

  if (musicPlaying) {
    stopMusic();
  } else {
    await startMusic();
  }
});
const envelopeScreen = document.getElementById('envelopeScreen');
const envelope = document.getElementById('envelope');

if (envelope && envelopeScreen) {

  envelope.addEventListener('click', async () => {

    // Открываем конверт
    envelope.classList.add('open');

    // Одновременно запускаем музыку
    await startMusic();

    // Убираем экран конверта
    setTimeout(() => {
      envelopeScreen.classList.add('hide');
    }, 1400);

  });

}
