const dots = document.querySelectorAll(".dot");
const currentImg = document.querySelector('.background-pic');
let time = 0;
const INTERVAL = 3000;

let index = 0;

for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.addEventListener('click', () => { 
        index = i;
        updatePicture(i); 
    });
}

function updatePicture(index) {
    const dot = dots[index];
    const newSrc = dot.getAttribute("data-img");
    currentImg.src = newSrc;

    for (const d of dots) {
        d.classList.remove("active");
    }
    dot.classList.add("active");
}


setInterval(() => {
    index = (index + 1) % dots.length;
    updatePicture(index);
}, INTERVAL); // update index and picture every 3 seconds