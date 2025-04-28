const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};
// window.onscroll = () => {
// 	menu.classList.remove('bx-x');
// 	navlist.classList.remove('active');
// };
// const sr = ScrollReveal ({
// 	distance: '45px',
// 	duration: 2700,
// 	reset: true
// })
// sr.reveal('.home-text',{delay:350, origin:'left'})
// sr.reveal('.home-img',{delay:350, origin:'right'})
// sr.reveal('.about, .contact',{delay:200, origin:'bottom'})
// .about, .education-section, .skills-section, .packages-section, .portfolio, .achievements, .testimonials, .contact, .ends

// ** Typing
const text = "Ibrahim Mahrous";
const target = document.getElementById("typed-name");
let index = 0;
function typeWriter() {
  if (index < text.length) {
	target.innerHTML += text.charAt(index);
	index++;
	setTimeout(typeWriter, 300);
  }
}
window.onload = typeWriter;