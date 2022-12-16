const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.witaj-img');
  
      if (entry.isIntersecting) {
        square.classList.add('witaj-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('witaj-animation');
    });
  });
  
  observer.observe(document.querySelector('.witaj'));