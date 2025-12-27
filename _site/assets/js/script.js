document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // Hide navbar on scroll down, show on scroll up
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    function onScroll() {
        const currentY = window.pageYOffset || document.documentElement.scrollTop;

        // If mobile menu is open, keep nav visible
        if (mobileNav.classList.contains('active')) {
            nav.classList.remove('nav-hidden');
            lastScrollY = currentY;
            return;
        }

        if (currentY > lastScrollY && currentY > 100) {
            // scrolling down
            nav.classList.add('nav-hidden');
        } else {
            // scrolling up
            nav.classList.remove('nav-hidden');
        }

        lastScrollY = Math.max(0, currentY);
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

});
