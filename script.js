const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Harap isi email dan kata sandi terlebih dahulu!");
    } else {
        // 1. SIMPAN email/username ke memori browser (localStorage)
        localStorage.setItem('namaPengguna', email);

        // 2. PINDAH ke halaman dashboard
        window.location.href = "dashboard.html";
    }
});
