const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide-card");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

const visibleCount = 4;
let index = 0;

// 🔄 Clone first few cards and append them for looping effect
for (let i = 0; i < visibleCount; i++) {
    const clone = slides[i].cloneNode(true);
    track.appendChild(clone);
}

const allSlides = document.querySelectorAll(".slide-card");

function moveSlide(newIndex) {
    index = newIndex;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 25}%)`;

    // 🧠 Reset when looping reaches clones
    if (index >= allSlides.length - visibleCount) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(0%)`;
        }, 500); // delay must match transition duration
    }
}

prevBtn.addEventListener("click", () => {
    index = index - 1 < 0 ? allSlides.length - visibleCount - 1 : index - 1;
    moveSlide(index);
});

nextBtn.addEventListener("click", () => moveSlide(index + 1));

// ⏱ Auto-scroll every 5 seconds
setInterval(() => {
    moveSlide(index + 1);
}, 5000);
