document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('stat-item')) {
                    startCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    // Cards matrum Stats-ai observe seivarkku
    document.querySelectorAll('.destination-card, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // 2. Stats Counter Logic
    function startCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                el.innerText = Math.floor(current).toLocaleString();
                requestAnimationFrame(update);
            } else {
                el.innerText = target.toLocaleString() + (target === 98 ? '%' : '+');
            }
        };
        update();
    }

    // 3. Simple Form Submission
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.cta-button span');
        btn.innerText = "Searching Destinations...";
        
        setTimeout(() => {
            alert("Finding the best trips for you! ✈️");
            btn.innerText = "Explore Destinations";
        }, 1500);
    });
});