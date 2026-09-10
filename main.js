function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "admin" && password === "1234") {
        error.textContent = "✅ كلمة المرور صحيحة";

        setTimeout(function () {
            window.location.href = "home.html";
        }, 500);

    } else {
        error.textContent = "❌ كلمة المرور أو اسم المستخدم غلط";
    }
}

function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
