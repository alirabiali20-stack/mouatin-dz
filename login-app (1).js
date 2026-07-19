
function switchTab(type) {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (type === 'citizen') {
        buttons[0].classList.add('active');
        document.getElementById('username').placeholder = "اسم المستخدم / رقم الهاتف / البريد الإلكتروني...";
    } else {
        buttons[1].classList.add('active');
        document.getElementById('username').placeholder = "الرقم التعريفي للمؤسسة / البريد الإلكتروني...";
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // التحقق من أن الحقول ليست فارغة قبل فتح التطبيق
    if (user.trim() === "" || pass.trim() === "") {
        alert("يرجى إدخال بيانات تسجيل الدخول أولاً!");
        return;
    }
    
    // التوجيه إلى الملف الرئيسي لمشروعك (index.html) لفتح المنصة
    window.location.href = "index.html"; 
}
