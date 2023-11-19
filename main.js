document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Usuário e senha válidos. Faça login!');
    } else {
        alert('Por favor, preencha o usuário e a senha.');
    }
});