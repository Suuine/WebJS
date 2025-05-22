document.addEventListener('DOMContentLoaded', function() {

// Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const catalogItem = document.getElementById('catalog-item');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // For medium screens, handle catalog dropdown click
    if (window.matchMedia("(max-width: 767px)").matches) {
        catalogItem.addEventListener('click', function(e) {
            if (e.target === this.querySelector('a')) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    }
    
    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                catalogItem.classList.remove('active');
            }
        });
    });

            const carouselInner = document.querySelector('.carousel-inner');
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicator');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');


            
            let currentIndex = 0;
            let intervalId;
            const slideInterval = 5000; 
            
            function initCarousel() {
                updateCarousel();
                startAutoSlide();
                
                prevBtn.addEventListener('click', prevSlide);
                nextBtn.addEventListener('click', nextSlide);
                
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        goToSlide(index);
                    });
                });
                
                const carousel = document.querySelector('.carousel');
                carousel.addEventListener('mouseenter', pauseAutoSlide);
                carousel.addEventListener('mouseleave', startAutoSlide);
            }
            
            function updateCarousel() {
                carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
            
            function prevSlide() {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
                updateCarousel();
                resetAutoSlide();
            }
            
            function nextSlide() {
                currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
                resetAutoSlide();
            }
            
            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
                resetAutoSlide();
            }
            
            function startAutoSlide() {
                intervalId = setInterval(nextSlide, slideInterval);
            }
            
            function pauseAutoSlide() {
                clearInterval(intervalId);
            }
            
            function resetAutoSlide() {
                pauseAutoSlide();
                startAutoSlide();
            }
            
            initCarousel();
        });

            const messenger = document.getElementById("messegeBtn");
            messenger.addEventListener("click", function() {  
            document.getElementById('messege').innerHTML = `
                <div class="messege">
                <button class="close" id="closeBtn">X</button>
                    <h2>Thanks!</h2>
                    <p>We will remember</p>
                    <p>you!</p>
                </div>
            `; 
            const closeBtn = document.getElementById("closeBtn");
            closeBtn.addEventListener("click", function() {
                document.getElementById('messege').innerHTML = '';
            });         
        })