// -------------------------------------------------------------------------------------- About Button And Close Button
let aboutbtn = document.getElementById('about-btn');
let closebtn = document.getElementById('close-btn');
let aboutpage = document.getElementById('about');

aboutbtn.addEventListener('click', function () {
  aboutpage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closebtn.addEventListener('click', function () {
  aboutpage.style.display = 'none';
  document.body.style.overflow = 'visible';
});

// -------------------------------------------------------------------------------------- Set Up to date Year in Footer

let dateyear = document.getElementById('dateyear');
var datey = new Date().getUTCFullYear();
dateyear.innerHTML = datey;

// -------------------------------------------------------------------------------------- Modals Pop Ups Open and Close

let letters = document.querySelectorAll('.letter-item');
let itemsPage = document.getElementById('allitems');
let popups = document.querySelectorAll('.itemaya');
let closebtnTwo = document.getElementById('closepopup');
var i = 0;
//Setting Position From Top Dynamically for itemspage.
window.addEventListener('scroll', function () {
  itemsPage.style.top = window.scrollY + 'px';
});

//close button.
closebtnTwo.addEventListener('click', function () {
  itemsPage.style.display = 'none';
  document.body.style.overflow = 'visible';
  for (var i = 0; i <= 26; i++) {
    popups[i].style.display = 'none';
  }
});

//open popup for each letter respectively.
letters[0].addEventListener('click', function () {
  popups[0].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[1].addEventListener('click', function () {
  popups[1].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[2].addEventListener('click', function () {
  popups[2].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[3].addEventListener('click', function () {
  popups[3].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[4].addEventListener('click', function () {
  popups[4].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[5].addEventListener('click', function () {
  popups[5].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[6].addEventListener('click', function () {
  popups[6].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[7].addEventListener('click', function () {
  popups[7].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[8].addEventListener('click', function () {
  popups[8].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[9].addEventListener('click', function () {
  popups[9].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[10].addEventListener('click', function () {
  popups[10].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[11].addEventListener('click', function () {
  popups[11].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[12].addEventListener('click', function () {
  popups[12].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[13].addEventListener('click', function () {
  popups[13].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[14].addEventListener('click', function () {
  popups[14].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[15].addEventListener('click', function () {
  popups[15].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[16].addEventListener('click', function () {
  popups[16].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[17].addEventListener('click', function () {
  popups[17].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[18].addEventListener('click', function () {
  popups[18].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[19].addEventListener('click', function () {
  popups[19].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[20].addEventListener('click', function () {
  popups[20].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[21].addEventListener('click', function () {
  popups[21].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[22].addEventListener('click', function () {
  popups[22].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[23].addEventListener('click', function () {
  popups[23].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[24].addEventListener('click', function () {
  popups[24].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[25].addEventListener('click', function () {
  popups[25].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

letters[26].addEventListener('click', function () {
  popups[26].style.display = 'block';
  itemsPage.style.display = 'block';
  document.body.style.overflow = 'hidden';
});
