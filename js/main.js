// Swiper Library

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 1500,
    // Navigation arrows
    Navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: false
    },
});

// Show Settings
let settings = document.querySelector(".settings");
let gear = document.querySelector(".settings .gear")

gear.addEventListener("click", () => {
    settings.classList.toggle("ShowSetting");
    gear.firstElementChild.classList.toggle("fa-spin")
})

// Color Settings
let colors = document.querySelectorAll(".settings .colors .color-obt .ob");

colors.forEach((e) => {
    e.addEventListener("click", () => {
        colors.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.classList.add("active")
        localStorage.setItem("color", getComputedStyle(e).backgroundColor)
        document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"))
    })
    if (getComputedStyle(e).backgroundColor === localStorage.getItem("color")) {
        e.classList.add("active")
    } else {
        e.classList.remove("active")
    }
})

document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));;



// Skills Progress
let skills_sec = document.querySelector(".skills-sec")
let progress = document.querySelectorAll(".skills-sec .container .skills .skill .progress .progress-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skills_sec.offsetTop - 400) {
        progress.forEach((e) => {
            e.style.width = e.dataset.progress;
            e.innerHTML = e.dataset.progress;
        })
    }
});


// Gallery


let selectImg = document.querySelector(".gallery .container .modal-body img");
let allImgs = document.querySelectorAll(".gallery .container .row .col-lg-2 > img");

allImgs.forEach((e) => {
    e.addEventListener("click", () => {
        selectImg.src = e.src;
    })
});


// Bullets

let AllBullets = document.querySelectorAll(".bullets .bullet")

AllBullets.forEach((e) => {
    e.addEventListener("click", () => {
        location.href = e.dataset.test;
    })
})


// Bullets Setting

let optionShow = document.querySelectorAll(".settings .bulletsSetting .buttons button");
let bullet = document.querySelector(".bullets");

optionShow.forEach((e) => {
    e.addEventListener("click", () => {
        optionShow.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.classList.add("active")
        if (e.classList.contains("yes")) {
            bullet.style.display = "block";
            localStorage.setItem("bullets", true);
        } else {
            bullet.style.display = "none";
            localStorage.setItem("bullets", false)
        }
    })
})

if (localStorage.getItem("bullets") === "true") {
    bullet.style.display = "block";
    optionShow.forEach((e) => {
        if (e.classList.contains("yes")) {
            e.classList.add("active")
        }
    })
}
else if (localStorage.getItem("bullets") === "false") {
    bullet.style.display = "none";
    optionShow.forEach((e) => {
        optionShow.forEach((ele) => {
            ele.classList.remove("active")
        })
        if (e.classList.contains("no")) {
            e.classList.add("active")
        }
    })
}

let toggle = document.querySelector(".navbar-toggler");
let hideGear = document.querySelector(".gear");

toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") === "true") {
        if (settings.classList.contains("ShowSetting")) {
            settings.classList.remove("ShowSetting")
        }
        hideGear.style.right = "0"
    } else {
        hideGear.style.right = "-30px";
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        if (getComputedStyle(hideGear).right === "0px") {
            hideGear.style.right = "-30px";
        }
    }
    if (window.scrollY <= 300) {
        if (toggle.getAttribute("aria-expanded") === "true") {
            hideGear.style.right = "0";
            settings.classList.remove("ShowSetting")
        }
    }
})