let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let home = document.querySelector(".round");
let cursor = document.querySelector("#cursor");
let text =  document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn1');
let rocks= document.getElementById('rock');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');
let hidden = document.querySelectorAll('.hidden');
 
let currentSlide = 0;
home.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.top = 50 + value * -0.8 + '%';
    bird1.style.top= value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top= value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value *0.5 + 'px';
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
})


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

formbtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slider");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 4000); 
}

function moveSlide(n) {
    slideIndex += n;
   let slides = document.getElementsByClassName("slider");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex - 1].style.display = "block"; 
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});
hidden.forEach((e1)=> observer.observe(e1));

