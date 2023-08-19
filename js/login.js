// adding event handler with submit btn
document.getElementById('submit-btn').addEventListener('click', function () {
    // getting email  from email field
    const UserEmail = document.getElementById('user-email');
    const email = UserEmail.value;
    // getting password from html

    const UserPass = document.getElementById('user-pass');
    const pass = UserPass.value;

    // verifying email and password

    if (email === 'admin@gmail.com' && pass === 'admin') {
        window.location.href = 'bank.html';
    }
    else {
        alert(' invalid !!! \n Email is admin@gmail.com \n Password is admin');
        UserEmail.value = '';
        UserPass.value = '';
    }
})