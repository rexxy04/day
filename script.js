const PASSWORD = "tes";

function tryUnlock() {
  const input = document.getElementById('password-input');
  const val = input.value.trim().toLowerCase().replace(/\s+/g, '');
  const errMsg = document.getElementById('error-msg');

  if (val === PASSWORD) {
    input.classList.remove('error');
    input.classList.add('success');
    errMsg.textContent = '';

    const overlay = document.getElementById('transition');
    overlay.classList.add('active');

    setTimeout(() => {
      document.getElementById('lock-screen').style.display = 'none';
      const reveal = document.getElementById('reveal-screen');
      reveal.classList.add('visible');
      overlay.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);

  } else {
    input.classList.add('error');
    input.classList.remove('success');
    errMsg.textContent = 'not quite. try again.';
    setTimeout(() => input.classList.remove('error'), 400);
  }
}

document.getElementById('password-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') tryUnlock();
});
