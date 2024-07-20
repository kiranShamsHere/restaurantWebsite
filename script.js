let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = (e) => {
    e.preventDefault();
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const clck = document.querySelector('.clck');

const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');

const show = document.querySelector('.show');

clck.addEventListener('click', (e) => {
    e.preventDefault();
    two.style.display = "grid";
    btnOne.style.display = "none";
    btnTwo.style.display = "block";
    btnThree.style.display = "none";
});
show.addEventListener('click', () => {
    one.style.display = "grid";
    two.style.display = "grid";
    three.style.display = "grid";
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
    btnThree.style.display = "block";
})