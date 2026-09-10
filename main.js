
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
