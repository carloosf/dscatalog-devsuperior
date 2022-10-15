scroll = document.querySelector(".upScroll")
header = document.querySelector(".header-logo")
page = document.querySelector('body')

console.log(window.pageYOffset)


window.addEventListener("scroll", upScroll)

function upScroll() {
    if (window.pageYOffset > 0) {

        header.classList.add("header-logo-fixed")
        header.classList.remove("header-logo")

    } else if (window.pageYOffset < 20) {


        header.classList.remove("header-logo-fixed")
        header.classList.add("header-logo")
    }
};

