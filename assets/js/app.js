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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}