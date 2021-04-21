/*
    contains - shows/gets all classes
    add - add class
    remove - remove class
    toggle - toggles class

*/

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', function() {
    links.classList.toggle('.show-links');
});