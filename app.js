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

 (function () {
    const form = document.getElementById("contact-form");
    const statusEl = document.getElementById("form-status");
    const submitBtn = document.getElementById("contact-submit");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      statusEl.textContent = "Sending…";
      submitBtn.disabled = true;

      try {
        // Send the form via EmailJS
        const resp = await emailjs.sendForm(
          "service_lux98kc",       // your service ID
          "template_9fhy89g",      // your template ID
          form                      // the <form> element
        );

        // Success UI
        statusEl.textContent = "Thanks! I’ll get back to you soon.";
        form.reset();
      } catch (err) {
        // Error UI
        console.error(err);
        statusEl.textContent = "Oops, something went wrong. Please try again.";
      } finally {
        submitBtn.disabled = false;
      }
    });
  })();    