const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".witaj-img");

    if (entry.isIntersecting) {
      square.classList.add("witaj-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("witaj-animation");
  });
});

observer.observe(document.querySelector(".witaj"));
// section two text element animation
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".anime-text-container ");

    if (entry.isIntersecting) {
      square.classList.add("fade-in");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-in");
  });
});

observer2.observe(document.querySelector(".text-container"));

observer.observe(document.querySelector(".witaj"));

// section 3 image element animation

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".konferansjer-img ");

    if (entry.isIntersecting) {
      square.classList.add("fade-in");
      squareTwo.classList.add("fade-in");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-in");
  });
});

observer3.observe(document.querySelector(".konferansjer-img-container"));

// section 3 rect two element animation

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".square-two ");

    if (entry.isIntersecting) {
      square.classList.add("fade-out");
      squareTwo.classList.add("fade-out");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-out");
  });
});

observer4.observe(document.querySelector(".square-container"));
