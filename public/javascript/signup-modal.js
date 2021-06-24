
/* modal click interaction */
const signupModalButton = document.querySelector('#signup-modal');
const signupModalBg = document.querySelector('#signupBg');
const signupModal = document.querySelector('#signupModal');

signupModalButton.addEventListener('click', () => {
    signupModal.classList.add('is-active');
});

signupModalBg.addEventListener('click', () => {
    signupModal.classList.remove('is-active')
});

/*send signup form to the database */
async function signupFormhandler(event) {
    event.preventDefault();
    const emailSignForm = document.querySelector('#email-signup-input').value.trim();
    const usernameSignForm = document.querySelector('#username-signup-input').value.trim();
    const passwordSignForm = document.querySelector('#password-signup-input').value.trim();

    if (usernameSignForm && emailSignForm && passwordSignForm) {
        const response = await fetch('/api/users/signup', {
            method: 'post',
            body: JSON.stringify({
                email: emailSignForm,
                username: usernameSignForm,
                password: passwordSignForm
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            setTimeout(function () {
                location.replace('/');
            }, 200)
        } else {
            alert(response.statusText)
        } console.log(response)
    }
}



document.querySelector('#signup-form').addEventListener('submit', signupFormhandler)
