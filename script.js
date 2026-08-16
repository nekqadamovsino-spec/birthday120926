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

/* Пытаемся запустить автоматически */
window.addEventListener('load', () => {
  startMusic();
});

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

    /* Если браузер заблокировал автозапуск —
       включаем музыку после клика по конверту */
    if (!musicPlaying) {
      await startMusic();
    }

    envelope.classList.add('open');

    setTimeout(() => {
      envelopeScreen.classList.add('hide');
    }, 1400);

  });
}
