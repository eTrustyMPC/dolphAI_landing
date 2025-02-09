document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        let currentPosition = 0;
        const firstSet = gallery.querySelector('div');
        const slideWidth = firstSet ? firstSet.offsetWidth : 0;
        let isHovered = false;

        // Add smooth transition
        gallery.style.transition = 'transform 50ms linear';

        gallery.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        gallery.addEventListener('mouseleave', () => {
            isHovered = false;
        });

        const moveGallery = () => {
            if (!isHovered && slideWidth > 0) {
                currentPosition -= 0.3; // Very slow movement
                gallery.style.transform = `translateX(${currentPosition}px)`;

                // Reset position when first set of logos is fully out of view
                if (Math.abs(currentPosition) >= slideWidth) {
                    currentPosition = 0;
                    gallery.style.transition = 'none';
                    gallery.style.transform = `translateX(${currentPosition}px)`;
                    // Force reflow
                    gallery.offsetHeight;
                    gallery.style.transition = 'transform 50ms linear';
                }
            }
            requestAnimationFrame(moveGallery);
        };

        // Start the animation
        requestAnimationFrame(moveGallery);

        // Handle window resize
        window.addEventListener('resize', () => {
            const newSlideWidth = gallery.querySelector('div').offsetWidth;
            if (Math.abs(currentPosition) >= newSlideWidth) {
                currentPosition = 0;
                gallery.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    }
});
