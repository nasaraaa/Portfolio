const toko=document.querySelectorAll(".slide")
let currentSlide = 0;

function loadSlides() {
	toko.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.add("open");
		} else {
			slide.classList.remove("open");
		}
	});
}

function goToNextSlide() {
	if (currentSlide === toko.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide += 1;
	}
	loadSlides();
}
let intervalId = 0;

// intervalId =setInterval(goToNextSlide,2000)

const slidee=document.querySelector(".trans");
const html=document.getElementById("html");
const css=document.getElementById("css");
const javascript=document.getElementById("javascript");
const ilustrator=document.getElementById("ilustrator");

window.addEventListener("scroll",()=>{
	if(slidee.getBoundingClientRect().top <= 700){
		html.style.width=80+"%";
		css.style.width=65+"%";
		javascript.style.width=50+"%";
		ilustrator.style.width=30+"%";
		
	}
})