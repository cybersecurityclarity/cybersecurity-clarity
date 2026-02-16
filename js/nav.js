/* Mobile nav toggle - uses event delegation so it works after nav is injected */
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.nav-toggle')) {
            var nav = document.querySelector('.nav');
            if (nav) nav.classList.toggle('menu-open');
        }
        if (e.target.closest('.nav-links a')) {
            var nav = document.querySelector('.nav');
            if (nav) nav.classList.remove('menu-open');
        }
    });
});
