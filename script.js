// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Typing Animation Effect
const typingText = document.querySelector('.typing-animation');
const words = ["Front-end Developer", "AI Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Short pause before typing next word
        } else {
            setTimeout(type, 80); // Deleting speed
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
        } else {
            setTimeout(type, 100); // Typing speed
        }
    }
}
type();

// 3. Progress Bar Animation for Skills
const progressBars = document.querySelectorAll('.progress-done');
let progressAnimated = false;

function animateProgressBars() {
    progressBars.forEach(progress => {
        const value = progress.getAttribute('data-done');
        if (!progress.style.width) {
            progress.style.width = value + '%';
            progress.style.opacity = 1;
        }
    });
}

window.addEventListener('scroll', () => {
    if (!progressAnimated) {
        const sectionTop = document.querySelector('.progress-done').getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if (sectionTop < triggerPoint) {
            animateProgressBars();
            progressAnimated = true; // Ensure it animates only once
        }
    }
});

// 4. Circular Progress for Professional Skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const innerCircle = circle.querySelector('.inner-circle');
    innerCircle.textContent = `${percent}%`;
    circle.style.background = `conic-gradient(#ff6a3d ${percent * 3.6}deg, #e5e5e5 0deg)`;
});

// 5. Contact Form Submission (Prevent default behavior)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simulate form submission success message
    formMessage.textContent = "Thank you for your message! I'll get back to you soon.";
    formMessage.style.display = 'block';
    formMessage.style.color = 'green';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
        form.reset();
    }, 3000); // Reset form after 3 seconds
});
