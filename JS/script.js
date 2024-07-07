const menu = document.querySelector("nav ul");
const header = document.querySelector("header");
const menubtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");

menubtn.addEventListener("click", () => {
  menu.classList.add("display");
});
closebtn.addEventListener("click", () => {
  menu.classList.remove("display");
});

// Scroll sticky navbar
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Static Numbers
const counterEls = document.querySelectorAll(".numbers");
counterEls.forEach((counter) => {
  counter.textContent = 0;

  function incrementCounters() {
    let currentNum = +counter.textContent;
    const dataCell = counter.getAttribute("data-cell");

    const increment = dataCell / 25;

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCell) {
      counter.textContent = currentNum;
      setTimeout(incrementCounters, 70);
    } else {
      counter.textContent = dataCell;
    }
  }

  incrementCounters();
});
