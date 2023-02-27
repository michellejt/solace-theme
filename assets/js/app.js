const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      entry.target.classList.toggle("in-view",entry.isIntersecting) 
  });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => { 
  const articles =Array.from(document.querySelectorAll('.fadein')); 
  for (let article of articles) {
    observer.observe(article);
  }   
});

const typing = document.querySelector('#typing')
let i = 0;
let text = "A short comic about life and videogames.";
let speed = 100;

function typeWriter() {
 if(i < text.length) {
     typing.innerHTML += text.charAt(i);
     i++;
     setTimeout(typeWriter, speed);
 }
}
setTimeout(typeWriter,2500);