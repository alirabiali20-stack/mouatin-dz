// دالتك الأصلية للتبديل بين مواطن ومؤسسة
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

// دالتك الأصلية المطورة لتعمل على كِلا الحقلين (الدخول والتسجيل) مرئياً
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId || 'password');
    // جلب الأيقونة المجاورة للحقل الذي تم الضغط عليه
    const toggleIcon = passwordInput.nextElementSibling;
    
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

// دالة التبديل المضافة للتحكم في ظهور واجهة إنشاء الحساب وإخفائها
function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabsArea = document.getElementById('tabsArea');
    const altLoginArea = document.getElementById('altLoginArea');
    const pageTitle = document.getElementById('pageTitle');
    const welcomeText = document.getElementById('welcomeText');

    if (formType === 'register') {
        loginForm.style.display = 'none';
        tabsArea.style.display = 'none';
        altLoginArea.style.display = 'none';
        
        registerForm.style.display = 'block';
        pageTitle.textContent = "إنشاء حساب جديد";
        welcomeText.textContent = "يرجى ملء البيانات للانضمام إلى البوابة الرقمية";
    } else {
        registerForm.style.display = 'none';
        
        loginForm.style.display = 'block';
        tabsArea.style.display = 'flex';
        altLoginArea.style.display = 'block';
        pageTitle.textContent = "تسجيل الدخول";
        welcomeText.textContent = "مرحباً بكم في البوابة الوطنية للخدمات الرقمية";
    }
}

// معالجة الدخول والتوجيه لملف المنصة بعد تعديل اسمه (home.html)
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    if (user.trim() === "" || pass.trim() === "") {
        alert("يرجى إدخال بيانات تسجيل الدخول!");
        return;
    }
    
    // التوجيه إلى الملف الرئيسي لمشروعك (home.html)
    window.location.href = "home.html"; 
}

// معالجة فوروم إنشاء الحساب الجديد والتوجيه الفوري
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPassword').value;
    
    if (name.trim() === "" || user.trim() === "" || pass.trim() === "") {
        alert("يرجى ملء جميع الحقول المطلوبة للتسجيل!");
        return;
    }
    
    alert("مرحباً بك يا " + name + "، تم إنشاء حسابك بنجاح وجاري فتح المنصة...");
    
    // التوجيه التلقائي للمنصة مباشرة بعد التسجيل
    window.location.href = "home.html";
}
