/* modal click interaction */
const loginModalBtn = document.querySelector('.login-btn');
const loginModalBg = document.querySelector('#login-modal-bg');
const loginModal = document.querySelector('#login-modal');

loginModalBtn.addEventListener('click', () => {
  loginModal.classList.add('is-active');
});

loginModalBg.addEventListener('click', () => {
  loginModal.classList.remove('is-active')
});

async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector('#email-login-input').value.trim();
  const password = document.querySelector('#password-login-input').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      setTimeout(function () {
        location.reload();
      }, 200)
    }
    else {
      alert(response.statusText);
    }
    console.log(response)
  }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler)
