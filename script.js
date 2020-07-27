const burguerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar__list');
const accItemHead = document.querySelectorAll('.accordion-header');


accItemHead.forEach(accItem => {
    accItem.addEventListener("click", event => {
        const activeAC = document.querySelector(".accordion-header.active");
        if (activeAC && activeAC !== accItem) {
            activeAC.classList.toggle("active");
            activeAC.nextElementSibling.style.maxHeight = 0;
        }

        accItem.classList.toggle("active");

        const accordionItemBody = accItem.nextElementSibling;

        if (accItem.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else if (!accItem.classList.contains("active")) {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


burguerMenu.addEventListener('click', e => {
    navbarList.classList.toggle('show-sidebar');
});