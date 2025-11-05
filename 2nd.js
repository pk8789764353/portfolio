  // Intersection Observer for reveal-on-scroll animations
    // Ref: MDN docs
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      })
    }, { threshold: 0.16 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Fake contact form handler (no backend). Replace with your API endpoint.
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      statusEl.textContent = 'Sending…';
      setTimeout(() => {
        statusEl.textContent = 'Thanks! I\'ll get back to you soon.';
        form.reset();
      }, 700);
    });

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();


    