
let i = 0;

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    
    if (i % 2 === 0) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
    
    i++; // Increment i for the next toggle
}

    


window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    let windowheight = window.innerHeight; // Define window height here
    for (let i = 0; i < reveals.length; i++) {
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

let popup = document.querySelector(".hirepopup");

function openpopup() {
    popup.classList.add("open-popup")
}
function closepopup(){
    popup.classList.add("open-popup");
}