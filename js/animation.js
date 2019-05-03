/*!
* Author: Xuan Do
* v1.0
*/
window.addEventListener('scroll', function() {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        // Relative to window.
        let boxClientY = boxes[i].getBoundingClientRect().top;
        if (boxClientY < 600) {
            boxes[i].classList.add("slideDown");
            boxes[i].classList.remove("zoomerOut");
        } else {
            boxes[i].classList.remove("slideDown");
            boxes[i].classList.add("zoomerOut");
        }
    }
}, false);
