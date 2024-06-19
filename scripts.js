// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const body = document.body;

    toggleThemeBtn.addEventListener('click', function() {
        body.classList.toggle('dark');
    });
});
