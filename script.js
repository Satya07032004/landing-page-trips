let imgDestiContainer = document.querySelector(".imgDestiContainer");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let imgArr = [
  "../images/Destinations/azhimala.webp",
  "../images/Destinations/marinaBeach.jpg",
  "../images/Destinations/meghalaya.jpg",
  "../images/Destinations/rameshwaram.jpeg",
  "../images/Destinations/kedarnath-temple.webp",
];

let currentIndex = 0;

function slideImg() {
  imgDestiContainer.style.backgroundImage = `url('${imgArr[currentIndex]}')`;
}

// Next button handler (loops back to the start)
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imgArr.length;
  slideImg();
});

// Previous button handler (loops to the end)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imgArr.length) % imgArr.length;
  slideImg();
});

// Initialize first image
slideImg();
