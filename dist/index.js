/*
 * classes: btn || fa-solid || inputPassword
 */
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
});
const $btn = document.querySelector('.btn');
const $showPass = document.querySelector('.fa-solid');
const $inputPassword = document.querySelector('input[type="password"]');
$showPass.addEventListener('click', () => {
    if ($inputPassword.getAttribute('type') === 'password') {
        $inputPassword.setAttribute('type', 'text');
        $showPass.classList.replace('fa-eye', 'fa-eye-slash');
    }
    else if ($inputPassword.getAttribute('type') === 'text') {
        $inputPassword.setAttribute('type', 'password');
        $showPass.classList.replace('fa-eye-slash', 'fa-eye');
    }
});
$btn.addEventListener('click', () => {
    window.location.replace('/src/pages/homePage.html');
});
