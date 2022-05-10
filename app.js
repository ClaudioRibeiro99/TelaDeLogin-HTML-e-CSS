const loginURL = "http://localhost:3000" 



function sendLogin()
{
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `${loginURL}/auth/login`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        mail,
        password
    }));
}

