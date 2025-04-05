
    document.querySelectorAll('.read-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.previousElementSibling;
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
        btn.textContent = isVisible ? 'Read More' : 'Read Less';
      });
    });
  


  window.addEventListener('scroll', function () {
    var button = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
