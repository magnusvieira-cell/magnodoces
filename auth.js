function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(err => {
            alert("Erro: " + err.message);
        });
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}
