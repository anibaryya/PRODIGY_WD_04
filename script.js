// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.education-card, .skill-category, .project-card, .internship-item, .activity-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if(parallax){
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // --- NEW 3D Image Mouse-Move Effect ---
        const heroSection = document.querySelector('.hero');
        const imageWrapper3D = document.querySelector('.hero-3d-image-wrapper');

        if (heroSection && imageWrapper3D) {
            heroSection.addEventListener('mousemove', function(e) {
                const { clientX, clientY } = e;
                const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = heroSection;

                // Calculate mouse position relative to the center of the hero section
                const xPos = (clientX - offsetLeft - offsetWidth / 2) / (offsetWidth / 2);
                const yPos = (clientY - offsetTop - offsetHeight / 2) / (offsetHeight / 2);

                const maxRotate = 15; // Max rotation in degrees

                // Apply the 3D rotation
                requestAnimationFrame(() => {
                    imageWrapper3D.style.transform = `rotateY(${xPos * maxRotate}deg) rotateX(${-yPos * maxRotate}deg)`;
                });
            });

            heroSection.addEventListener('mouseleave', function() {
                // Reset rotation when mouse leaves the hero section
                imageWrapper3D.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });
        }
        // --- END of NEW 3D Image Effect ---


        // Add hover effect to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) translateY(-2px)';
            });
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0)';
            });
        });

        // Typing effect for hero section subtitle
        const subtitle = document.querySelector('.hero .subtitle');
        const text = subtitle.innerText;
        subtitle.innerText = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitle.innerText += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start typing effect after page load
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1500);
        });

        // Add floating animation to activity icons
        document.querySelectorAll('.activity-icon').forEach((icon, index) => {
            icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
        });

        // Add float keyframe
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        // Add glow effect on hover for buttons
        document.querySelectorAll('.btn, .project-links a').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 20px var(--primary-color)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.textShadow = 'none';
            });
        });