/*!
* Author: Xuan Do
* v1.0
*/

window.addEventListener('scroll', function() {
    let boxes = document.querySelectorAll('.box');
    console.log(boxes);
    for (let i = 0; i < boxes.length; i++) {
        // Relative to window.
        let boxClientY = boxes[i].getBoundingClientRect().top;

        let windowInnerWidthAnimation = window.innerWidth;
        if (windowInnerWidthAnimation >= 1200 && boxClientY < 600) {
            boxes[i].classList.add("slideDown");

            boxes[i].classList.remove("zoomerOut");
        } else {
            boxes[i].classList.remove("slideDown");
            boxes[i].classList.add("zoomerOut");
        }
    }
}, false);
