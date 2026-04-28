// Main JavaScript for Horizon website
document.addEventListener('DOMContentLoaded', () => {
    // ===== Mobile Navigation Toggle =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
            
            // Update icon
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip language toggle and external links
            if (href === '#' || href.startsWith('#lang-')) return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Contact Form Handling =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                language: LanguageManager.getCurrentLanguage()
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call (replace with actual backend integration)
            try {
                // In a real implementation, you would send to your backend
                // await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // });
                
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                showFormMessage(
                    LanguageManager.getCurrentLanguage() === 'zh' 
                        ? '消息发送成功！我们会尽快回复您。' 
                        : 'Message sent successfully! We\'ll get back to you soon.',
                    'success'
                );
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage(
                    LanguageManager.getCurrentLanguage() === 'zh'
                        ? '发送失败，请稍后重试。'
                        : 'Failed to send message. Please try again later.',
                    'error'
                );
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
        
        // Helper function to show form messages
        function showFormMessage(message, type) {
            // Remove existing messages
            const existingMsg = contactForm.querySelector('.form-message');
            if (existingMsg) existingMsg.remove();
            
            // Create message element
            const msgElement = document.createElement('div');
            msgElement.className = `form-message ${type}`;
            msgElement.textContent = message;
            msgElement.style.cssText = `
                padding: 12px 16px;
                border-radius: 8px;
                margin-top: 16px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                background-color: ${type === 'success' ? '#d1fae5' : '#fee2e2'};
                color: ${type === 'success' ? '#065f46' : '#991b1b'};
                border: 1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'};
            `;
            
            contactForm.appendChild(msgElement);
            
            // Auto-remove after 5 seconds
            setTimeout(() => {
                if (msgElement.parentNode) {
                    msgElement.style.opacity = '0';
                    msgElement.style.transition = 'opacity 300ms ease';
                    setTimeout(() => msgElement.remove(), 300);
                }
            }, 5000);
        }
    }
    
    // ===== Current Year in Footer =====
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // ===== Scroll Animation for Sections =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 600ms ease, transform 600ms ease;
        }
        
        .section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card, .portfolio-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 600ms ease, transform 600ms ease;
        }
        
        .service-card.animate-in, .portfolio-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Stagger animation delays */
        .service-card:nth-child(1) { transition-delay: 100ms; }
        .service-card:nth-child(2) { transition-delay: 200ms; }
        .service-card:nth-child(3) { transition-delay: 300ms; }
        .service-card:nth-child(4) { transition-delay: 400ms; }
        
        .portfolio-item:nth-child(1) { transition-delay: 100ms; }
        .portfolio-item:nth-child(2) { transition-delay: 200ms; }
        .portfolio-item:nth-child(3) { transition-delay: 300ms; }
    `;
    document.head.appendChild(style);
    
    // ===== Image Placeholder Interactions =====
    document.querySelectorAll('.img-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            // In a real implementation, this would open a lightbox or gallery
            // For now, just add a visual feedback
            placeholder.style.transform = 'scale(0.98)';
            placeholder.style.transition = 'transform 200ms ease';
            
            setTimeout(() => {
                placeholder.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`Image placeholder clicked: ${placeholder.querySelector('span')?.textContent || 'Unknown'}`);
        });
    });
    
    // ===== Sticky Navigation Background =====
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // ===== Initialize Animations =====
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('animate-in');
            }
        });
        
        document.querySelectorAll('.service-card, .portfolio-item').forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('animate-in');
            }
        });
    }, 500);
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // ===== Console Welcome Message =====
    console.log('%c🌈 Horizon Creative Studio', 'color: #2563eb; font-size: 18px; font-weight: bold;');
    console.log('%cBilingual website loaded successfully!', 'color: #6b7280;');
    console.log('Language:', LanguageManager.getCurrentLanguage());
});