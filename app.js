const html = document.querySelector("html");
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobilMenu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");
const scrollUp = document.querySelector(".scroll-up-btn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobilMenu.classList.toggle("active")
})

document.addEventListener("scroll", () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = "#29323c"
    } else {
        header.style.backgroundColor = "transparent"
    }
    if (this.scrollY > 250) {
        scrollUp.classList.add("show");
    } else {
        scrollUp.classList.remove("show");
    }
})

// Slide up script 

scrollUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

// text animation

var options = {
    strings: [" Web Developer", " Freelancer", " Quick Learner"],
    typeSpeed: 70,
    backSpeed: 85,
    loop: true
};

var typed = new Typed('.typing', options);


menuItem.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        mobilMenu.classList.toggle("active")
    })
})



// Form submission

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add("success");
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.classList.add("error");
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.classList.add("error");
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)