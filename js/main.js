/*!
 * Author: Xuan Do
 * v1.0
 */

// Move sidebar on scroll
let sidebar = document.getElementById('sidebar');
let navbar = document.getElementById('navbar');
let footer = document.getElementById('footer');


let header = document.getElementById('header');
let headeroffsetHeight = header.offsetHeight;


let windowInnerWidth = window.innerWidth;
window.addEventListener('scroll', function() {
    let footerClientY = footer.getBoundingClientRect().top;
    let footerClientHeight = footer.clientHeight;
    // Stop adding the affix class to navbar when users reach the end of the content.
    let meetFooter = footerClientY - footerClientHeight;

    if (windowInnerWidth >= 1200 && pageYOffset > headeroffsetHeight  && meetFooter > 0) {
        // Add data-spy="affix" to navbar.
        navbar.classList.add("affix");
    } else {
        navbar.classList.remove("affix");
    }
}, false);
