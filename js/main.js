// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Home Page Slider Configuration
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Gallery Filter
    const galleryFilters = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function updateGalleryItem(item, show) {
        if (show) {
            item.style.display = 'block';
            // Use setTimeout to ensure display: block is applied before transition
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            // Hide the item after transition
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    }

    if (galleryFilters.length > 0) {
        // Add transition styles to gallery items
        galleryItems.forEach(item => {
            item.style.transition = 'all 0.3s ease-in-out';
        });

        galleryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const selectedFilter = filter.getAttribute('data-filter');

                // Update filter button styles
                galleryFilters.forEach(btn => {
                    btn.classList.remove('bg-orange-500', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                filter.classList.remove('bg-gray-200', 'text-gray-700');
                filter.classList.add('bg-orange-500', 'text-white');

                // Filter gallery items
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    updateGalleryItem(item, selectedFilter === 'all' || selectedFilter === itemCategory);
                });
            });
        });
    }

    // Contact Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message. We will get back to you soon!');
            
            // Reset form
            contactForm.reset();
        });
    }
});
