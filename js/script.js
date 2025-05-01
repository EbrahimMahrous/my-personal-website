const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
// ** Anamition
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true,
  easing: "ease-in-out",
});

sr.reveal(".home-text", { delay: 300, origin: "left" });
sr.reveal(".home-img", { delay: 300, origin: "right" });

sr.reveal(".about", { delay: 200, origin: "bottom" });
sr.reveal(".education-section", { delay: 250, origin: "left", interval: 200 });
sr.reveal(".packages-section", { delay: 300, origin: "bottom", interval: 200 });

sr.reveal(".portfolio .card", { delay: 200, origin: "top", interval: 100 });

sr.reveal(".achievements", { delay: 200, origin: "bottom", interval: 150 });

sr.reveal(".testimonials .testimonial", {
  delay: 200,
  origin: "left",
  interval: 100,
});

sr.reveal(".contact", { delay: 200, origin: "bottom" });
sr.reveal(".ends", { delay: 300, origin: "bottom" });

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

// ** Mouse Move
const cols = document.querySelectorAll(".portfolio-content .col");

cols.forEach((col) => {
  const img = col.querySelector("img");

  col.addEventListener("mousemove", (e) => {
    const rect = col.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x / rect.width) * 100;
    const moveY = (y / rect.height) * 100;

    img.style.transform = `translate(-${moveX / 3}%, -${moveY / 3}%)`;
  });

  col.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0, 0)";
  });
});
