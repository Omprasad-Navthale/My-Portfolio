 // Navigation and Mobile Menu
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Smooth Scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         window.scrollTo({
             top: target.offsetTop - 80,
             behavior: 'smooth'
         });
     });
 });

 // Sticky Header
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 50);
 });

 // Dark Mode Toggle
 const themeToggle = document.querySelector('.theme-toggle');
 const icon = themeToggle.querySelector('i');

 themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     icon.classList.toggle('fa-moon');
     icon.classList.toggle('fa-sun');
 });

 // Module Card Flipping
 const moduleCards = document.querySelectorAll('.module-card');
 
 moduleCards.forEach(card => {
     card.addEventListener('click', () => {
         card.classList.toggle('flipped');
     });
 });

 // Form Validation
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     
     // Simple validation
     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
         alert('Please fill in all fields');
         return;
     }
     
     // Email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         alert('Please enter a valid email address');
         return;
     }
     
     // If validation passes, you would normally send the form data to a server
     alert('Message sent successfully!');
     contactForm.reset();
 });

 // Typing animation for the home section
 const typingText = document.querySelector('.typing-text');
 const text = typingText.textContent.trim();
 typingText.textContent = '';
 
 let charIndex = 0;
 function typeText() {
     if (charIndex < text.length) {
         typingText.textContent += text.charAt(charIndex);
         charIndex++;
         setTimeout(typeText, 100);
     }
 }
 
 // Start typing when page loads
 window.addEventListener('load', typeText);