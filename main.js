document.getElementById("register-link").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("login-form").style.display = 'none';
    document.getElementById("registro-form").style.display = 'block';
});

document.getElementById("login-link").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("registro-form").style.display = 'none';
    document.getElementById("login-form").style.display = 'block';
});





