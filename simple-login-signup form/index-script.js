document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#login').addEventListener('click', () => {
        setTimeout(() => {
            alert('redirecting to log in page');
            window.location.href = "/login.html";
        }, 300)
    } );  // for login-button

    document.querySelector('#signin').addEventListener('click', () => {
        setTimeout(() => {
            alert('redirecting to sign in page');
            window.location.href = "/signup.html";
        }, 300)
    } );  // for signin-button

    });