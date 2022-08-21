const desNavItem = document.querySelectorAll(".destination__nav-item ");
const destinationName = document.querySelector(".destination__name");
const destinationDescription = document.querySelector(".des__description");
const destinationDistance = document.querySelector(".des__foot-1>h2");
const destinationTime = document.querySelector(".des__foot-2>h2");
const crewName = document.querySelector(".crew__name");
const techImage = document.querySelector(".tech__img");
const techImageMobile = document.querySelector(".tech__img-mobile");
const crewOccupation = document.querySelector(".crew__occ");
const crewDescription = document.querySelector(".crew__disc");
const dotsArr = Array.from(document.querySelectorAll(".dot"));
const technologyName = document.querySelector(".tech__name");
const techDescription = document.querySelector(".tech__desc-body");
const technologyContainer = document.querySelector(".section__tech");
const crewContainer = document.querySelector(".section__crew");
const destinationContainer = document.querySelector(".section__destination");
const homeContainer = document.querySelector(".home__wrap");
const mainNavItems = Array.from(document.querySelectorAll(".main__nav"));
const exploreButton = document.querySelector(".explore");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav__mob");
const navSection = document.querySelector(".nav__section");
const phoneNav = Array.from(
  document.querySelectorAll(".nav__list-item-mobile")
);
const pageArr = [
  homeContainer,
  destinationContainer,
  crewContainer,
  technologyContainer,
];

open.addEventListener("click", function () {
  navList.style.width = "50vw";
  close.style.display = "block";
  open.style.display = "none";
});
close.addEventListener("click", function () {
  navList.style.width = "0";
  close.style.display = "none";
  open.style.display = "block";

  console.log("clicked");
});

exploreButton.addEventListener("click", function () {
  pageArr.forEach((el) => {
    el.classList.remove("page__active");
  });
  destinationContainer.classList.add("page__active");
  mainNavItems.forEach((item) => {
    item.classList.remove("nav__active");
  });
  mainNavItems[1].classList.add("nav__active");
});

const technologyControllerArr = Array.from(
  document.querySelectorAll(".tech__num-item")
);

const navItemArr = [...desNavItem];

const infos = async function () {
  const res = await fetch(`./data.json`);
  const data = await res.json();
  return data;
};

mainNavItems.forEach((arr, i) => {
  arr.addEventListener("click", function () {
    pageArr.forEach((arr0) => {
      arr0.classList.remove("page__active");
    });
    mainNavItems.forEach((arr) => {
      arr.classList.remove("nav__active");
    });
    arr.classList.add("nav__active");
    pageArr[i].classList.add("page__active");

    if (screen.width <= 425) {
      navList.style.width = "0";
      close.style.display = "none";
      open.style.display = "block";
    }
  });
});
phoneNav.forEach((arr, i) => {
  arr.addEventListener("click", function () {
    pageArr.forEach((arr0) => {
      arr0.classList.remove("page__active");
    });

    pageArr[i].classList.add("page__active");
    pageArr[i].classList.add("transition");
    pageArr[i].style.transform = "translateX(0)";
    if (screen.width <= 425) {
      navList.style.width = "0";
      close.style.display = "none";
      open.style.display = "block";
    }
  });
});

navItemArr.forEach((arr, i) => {
  arr.addEventListener("click", async function () {
    const data = await infos();

    navItemArr.forEach((arr) => {
      arr.classList.remove("desnav__active");
    });
    arr.classList.add("desnav__active");
    destinationName.innerHTML = data.destinations[i].name.toUpperCase();
    destinationDescription.innerHTML = data.destinations[i].description;
    destinationDistance.innerHTML = data.destinations[i].distance.toUpperCase();
    destinationTime.innerHTML = data.destinations[i].travel.toUpperCase();
  });
});
console.log(screen.width);
dotsArr.forEach((arr, i) => {
  arr.addEventListener("click", async function () {
    const data = await infos();
    console.log(arr, i);
    dotsArr.forEach((dot) => {
      dot.classList.remove("dot__active");
    });
    arr.classList.add("dot__active");
    crewName.innerHTML = data.crew[i].name.toUpperCase();
    crewOccupation.innerHTML = data.crew[i].role.toUpperCase();
    crewDescription.innerHTML = data.crew[i].bio;
  });
});
technologyControllerArr.forEach((arr, i) => {
  arr.addEventListener("click", async function () {
    technologyControllerArr.forEach((arr) => {
      arr.classList.remove("tech__active");
    });
    arr.classList.add("tech__active");
    const data = await infos();

    technologyName.innerHTML = data.technology[i].name.toUpperCase();

    techImage.src = data.technology[i].images.portrait;
    techDescription.innerHTML = data.technology[i].description;
    techImageMobile.src = data.technology[i].images.landscape;
  });
});
