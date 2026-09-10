
   function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "") {
        error.textContent = "من فضلك اختر المستخدم وأدخل كلمة المرور";
        return;
    }

    if (password === "") {
        error.textContent = "من فضلك أدخل كلمة المرور";
        return;
    }

    error.textContent = "تم تسجيل الدخول بنجاح";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // بيانات الدخول
    if (username === "admin" && password === "123456") {
        error.textContent = "تم تسجيل الدخول بنجاح";

        // الانتقال للصفحة الرئيسية
        setTimeout(function () {
            window.location.href = "home.html";
        }, 500);

    } else {
        error.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
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

function toggleTheme() {
    document.body.classList.toggle("dark");
}
function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
