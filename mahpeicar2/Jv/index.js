
        // Hamburger
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

// Navbar scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
