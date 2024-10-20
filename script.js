document.addEventListener('DOMContentLoaded', function () {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let formbtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let home = document.querySelector("#home");
    let cursor = document.querySelector("#cursor");
    let text = document.getElementById('text');
    let bird1 = document.getElementById('bird1');
    let bird2 = document.getElementById('bird2');
    let btn = document.getElementById('btn1');
    let rocks = document.getElementById('rock');
    let forest = document.getElementById('forest');
    let water = document.getElementById('water');
    let hidden = document.querySelectorAll('.hidden');

    home.addEventListener("mousemove", function (dets) {
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
    });

    home.addEventListener("mouseenter", function () {
        cursor.style.transform = "scale(1)";
        cursor.style.opacity = 1;
    });

    home.addEventListener("mouseleave", function () {
        cursor.style.transform = "scale(0)";
        cursor.style.opacity = 0;
    });

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        text.style.top = 50 + value * -0.8 + '%';
        text.style.opacity = 1 - value / 500; 
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * 2 + 'px';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * -5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        rocks.style.top = value * -0.12 + 'px';
        forest.style.top = value * 0.25 + 'px';
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
    });

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

    
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    hidden.forEach((el) => observer.observe(el));
    
    function typeWriter(text, element, speed = 500) {
        let index = 0;
        function write() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(write, speed);
            }
        }
        write();
    }

    let headingElement1 = document.querySelector(".heading1");
    let headingElement2 = document.querySelector(".heading2");
    let headingElement3 = document.querySelector(".heading3");
    let headingElement4 = document.querySelector(".heading4");
    let headingElement5 = document.querySelector(".heading5");
    let headingElement6 = document.querySelector(".heading6");

    typeWriter("Book Now", headingElement1);
    typeWriter("Packages", headingElement2);
    typeWriter("Services", headingElement3);
    typeWriter("Gallery", headingElement4);
    typeWriter("Review", headingElement5);
    typeWriter("Contact", headingElement6);
    
        const slides = document.querySelectorAll('.review-slider .slider');
        let currentIndex = 0;
    
        function moveSlide(direction) {
            
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
    
            currentIndex += direction;
 
            if (currentIndex < 0) {
                currentIndex = slides.length - 1; 
            } else if (currentIndex >= slides.length) {
                currentIndex = 0; 
            }
    
            slides[currentIndex].style.display = 'block';
        }
    
        moveSlide(0);
    
        document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
        document.querySelector('.next').addEventListener('click', () => moveSlide(1));
    
   
    document.getElementById('flipCard').addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    
let globalIndex = 0;
let last = { x: 0, y: 0 };

const images = document.querySelectorAll('.imagesMORE');

const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.dataset.status = "active"; 
    last = { x, y }; 
};

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y); 
};

window.onmousemove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > 100) {
        images.forEach((img) => img.dataset.status = 'inactive');
        const lead = images[globalIndex % images.length];
        activate(lead, e.clientX, e.clientY);
        globalIndex++;
    }
};

});
