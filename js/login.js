// adding event handler with submit btn
document.getElementById('submit-btn').addEventListener('click',function(){
    // getting email  from email field
    const UserEmail = document.getElementById('user-email');
    const email = UserEmail.value;
    // getting password from html

    const UserPass = document.getElementById('user-pass');
    const pass = UserPass.value;
    
    // verifying email and password

    if(email === 'admin@gmail.com' && pass === 'admin')
    {
        console.log('valid user')
    }
    else{
        console.log('invalid email or password');
    }
})