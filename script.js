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
      square.classList.add("fade-up");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-up");
  });
});

observer4.observe(document.querySelector(".square-container"));


// section 3 rect two element animation

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".dron-image ");

    if (entry.isIntersecting) {
      square.classList.add("dron-fly");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("dron-fly");
  });
});

observer5.observe(document.querySelector(".dron-box"));



// 

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".social-img ");

    if (entry.isIntersecting) {
      square.classList.add("fade-up");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-up");
  });
});

observer6.observe(document.querySelector(".five-image-container"));




////

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".five-text-container ");

    if (entry.isIntersecting) {
      square.classList.add("fade-down");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-down");
  });
});

observer7.observe(document.querySelector(".animation-five-text-container"));


////////


const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".six-anime-text-container ");

    if (entry.isIntersecting) {
      square.classList.add("fade-up");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-up");
  });
});

observer8.observe(document.querySelector(".six-text-container"));



////

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".medialne-img ");

    if (entry.isIntersecting) {
      square.classList.add("fade-in");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("fade-in");
  });
});

observer9.observe(document.querySelector(".medialne-img-container"));


////////

const hamburger = document.querySelector(".hamburger");
const x = document.querySelector(".x");
hamburger.addEventListener('click', () => { 
  const nav = document.querySelector(".nav");
    nav.classList.remove("none");
    hamburger.classList.add("none");
    x.classList.remove("none");
})



x.addEventListener('click', hideNavbar)





const dziennikarz = document.querySelector(".dziennikarz");
const konferansjer = document.querySelector(".konferansjer");
const video = document.querySelector(".video");
const social = document.querySelector(".social");
const szkolenia = document.querySelector(".szkolenia");
const kontakt = document.querySelector(".kontakt");


kontakt.addEventListener('click', ()=>{
  document.querySelector(".eight-section").scrollIntoView();
  hideNavbar();
})

szkolenia.addEventListener('click', ()=>{
  document.querySelector(".six-section").scrollIntoView();
  hideNavbar();
})

social.addEventListener('click', ()=>{
  document.querySelector(".five-section").scrollIntoView();
  hideNavbar();
})

dziennikarz.addEventListener('click', ()=>{
  document.querySelector(".sec-section").scrollIntoView();
  hideNavbar();
})

konferansjer.addEventListener('click', ()=>{
  document.querySelector(".third-section").scrollIntoView();
  hideNavbar();
})

video.addEventListener('click', ()=>{
  document.querySelector(".four-section").scrollIntoView();
  hideNavbar();
})








function hideNavbar(){
  const nav = document.querySelector(".nav");
  nav.classList.add("none");
  x.classList.add("none");
  hamburger.classList.remove("none");
}