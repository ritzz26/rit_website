const timelineItems = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200); // Stagger delay: 200ms per item
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => observer.observe(item));

const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon-o');
      icon.classList.add('fa-sun-o');
    } else {
      icon.classList.remove('fa-sun-o');
      icon.classList.add('fa-moon-o');
    }
  });