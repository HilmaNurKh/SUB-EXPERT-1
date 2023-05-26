import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');

const hamburger = document.querySelector('#hamburger');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

hamburger.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

const container = document.querySelector('.container');
const card = data.restaurants.map(
  (restaurant) => `<article class="card" tabindex="0">
  <div class="head-card">
    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
  </div>
  <div class="body-card">
    <h3>${restaurant.name}</h3>
    <h4>${restaurant.city}</h4>
    <p>${restaurant.description}</p>
  </div>
</article>`
);