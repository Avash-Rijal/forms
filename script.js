const pw = document.getElementById('pw').value;
const cpw = document.getElementById('cpw').value;
const pwVerification = document.querySelector('#pw + span.pw');

if(pw = ''){
    pwVerification.textContent = 'Password missing';
}