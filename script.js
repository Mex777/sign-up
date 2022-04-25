const password = document.getElementById('pass');
const confirmation = document.getElementById('passCon');

password.addEventListener('keyup', handleDiff);
confirmation.addEventListener('keyup', handleDiff);

/**
 * Checks whether the password is the same with the confirmation.
 * Adapts the style of the page according to it.
 */
function handleDiff() {
  const outcome = document.getElementById('same');
  if (password.value != confirmation.value) {
    password.style.borderColor = 'rgb(176, 0, 0)';
    confirmation.style.borderColor = 'rgb(176, 0, 0)';
    outcome.innerText = '*Passwords do not match';
  } else {
    password.style.borderColor = 'rgb(188, 188, 188)';
    confirmation.style.borderColor = 'rgb(188, 188, 188)';
    outcome.innerText = '';
  }
}
