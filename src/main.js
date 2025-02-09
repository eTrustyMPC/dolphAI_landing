// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Projects Carousel Functionality
const projectsCarousel = document.getElementById('projectsCarousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

if (projectsCarousel && prevButton && nextButton) {
    let currentPosition = 0;
    const cardWidth = projectsCarousel.querySelector('.min-w-full').offsetWidth;
    let isAutoScrolling = true;
    let autoScrollInterval;
    let isTransitioning = false;

    // Function to handle carousel movement
    const moveCarousel = (direction) => {
        if (isTransitioning) return;
        isTransitioning = true;

        const newPosition = direction === 'next' ? 
            currentPosition - cardWidth :
            currentPosition + cardWidth;

        projectsCarousel.style.transform = `translateX(${newPosition}px)`;
        currentPosition = newPosition;

        // Reset position for infinite scroll
        if (Math.abs(currentPosition) >= cardWidth * 2) {
            setTimeout(() => {
                projectsCarousel.style.transition = 'none';
                currentPosition = 0;
                projectsCarousel.style.transform = `translateX(${currentPosition}px)`;
                setTimeout(() => {
                    projectsCarousel.style.transition = 'transform 1000ms ease-linear';
                }, 50);
            }, 1000);
        }

        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    };

    // Auto-scroll functionality
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (isAutoScrolling) {
                moveCarousel('next');
            }
        }, 5000); // Change slide every 5 seconds
    };

    // Initialize auto-scroll
    startAutoScroll();

    // Event listeners for manual navigation
    prevButton.addEventListener('click', () => {
        isAutoScrolling = false;
        clearInterval(autoScrollInterval);
        moveCarousel('prev');
        setTimeout(() => {
            isAutoScrolling = true;
            startAutoScroll();
        }, 5000);
    });

    nextButton.addEventListener('click', () => {
        isAutoScrolling = false;
        clearInterval(autoScrollInterval);
        moveCarousel('next');
        setTimeout(() => {
            isAutoScrolling = true;
            startAutoScroll();
        }, 5000);
    });

    // Pause auto-scroll on hover
    projectsCarousel.addEventListener('mouseenter', () => {
        isAutoScrolling = false;
    });

    projectsCarousel.addEventListener('mouseleave', () => {
        isAutoScrolling = true;
    });
}

// Pixel Wave Animation
const pixelWave = document.getElementById('pixelWave');
if (pixelWave) {
    const colors = [
        'rgba(99, 102, 241, 0.2)',   // Indigo
        'rgba(139, 92, 246, 0.2)',    // Purple
        'rgba(59, 130, 246, 0.2)',    // Blue
        'rgba(6, 182, 212, 0.2)',     // Cyan
        'rgba(16, 185, 129, 0.2)',    // Emerald
    ];

    const COLS = 320; // More columns for higher resolution
    const ROWS = 32;  // More rows for taller waves
    const PIXEL_SIZE = Math.ceil(window.innerWidth / COLS);
    let startTime = Date.now();

    // Create pixels
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const pixel = document.createElement('div');
            pixel.className = 'absolute rounded-full';
            pixel.style.width = `${PIXEL_SIZE}px`;
            pixel.style.height = `${PIXEL_SIZE}px`;
            pixel.style.left = `${col * PIXEL_SIZE}px`;
            pixel.style.top = `${row * PIXEL_SIZE}px`;
            pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.transform = 'scale(0.8)';
            pixelWave.appendChild(pixel);
        }
    }

    // Animate pixels
    const animate = () => {
        const pixels = pixelWave.children;
        const now = Date.now();
        const elapsed = now - startTime;

        for (let i = 0; i < pixels.length; i++) {
            const pixel = pixels[i];
            const col = i % COLS;
            const row = Math.floor(i / COLS);

            // Create multiple overlapping waves with gentle speed
            const baseFreq = 0.002; // Reduced frequency
            const baseSpeed = 0.0008; // Reduced speed
            const baseAmp = 10;     // Slightly reduced amplitude

            // Primary gentle wave
            const wave1 = Math.sin(col * baseFreq + elapsed * baseSpeed) * baseAmp;
            // Secondary wave
            const wave2 = Math.sin(col * baseFreq * 1.5 + elapsed * baseSpeed * 0.8) * (baseAmp * 0.6);
            // Third wave
            const wave3 = Math.sin(col * baseFreq * 2 + elapsed * baseSpeed * 1.2) * (baseAmp * 0.3);
            // Fourth slow wave for subtle movement
            const wave4 = Math.sin(col * baseFreq * 0.5 + elapsed * baseSpeed * 0.4) * (baseAmp * 0.5);

            // Combine all waves with row-based phase shift
            const y = wave1 + wave2 + wave3 + wave4 + (row * 0.8);

            // Update position with smooth transition
            pixel.style.transform = `scale(0.8) translateY(${y}px)`;

            // Gentle opacity variation
            const opacityWave = Math.sin(col * baseFreq + elapsed * baseSpeed * 0.3);
            const opacity = 0.3 + opacityWave * 0.2;
            pixel.style.opacity = opacity.toString();
        }

        requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        pixelWave.innerHTML = '';
        const newPixelSize = Math.ceil(window.innerWidth / COLS);
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const pixel = document.createElement('div');
                pixel.className = 'absolute rounded-full';
                pixel.style.width = `${newPixelSize}px`;
                pixel.style.height = `${newPixelSize}px`;
                pixel.style.left = `${col * newPixelSize}px`;
                pixel.style.top = `${row * newPixelSize}px`;
                pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                pixel.style.transform = 'scale(0.8)';
                pixelWave.appendChild(pixel);
            }
        }
    });
}

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', data);
        
        // Clear form
        form.reset();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    });
}
