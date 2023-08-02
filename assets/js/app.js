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


let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};

const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};
