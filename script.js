const burguerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar__list');
const accordionItemHeaders = document.querySelectorAll('.accordion-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const aciveAC = document.querySelector(".accordion-header.active");
        if (aciveAC && aciveAC !== accordionItemHeader) {
            aciveAC.classList.toggle("active");
            aciveAC.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


burguerMenu.addEventListener('click', e => {
    navbarList.classList.toggle('show-sidebar');
});