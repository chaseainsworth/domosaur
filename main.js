let span = document.querySelector('span.mess-with-me');

span.style.fontSize = '3em';

let paragraph = document.querySelector('p.mess-with-me');

paragraph.style.backgroundColor = 'green';

let trex = document.querySelector('#hide-me');

trex.style.display = 'none';

let triDino = document.querySelector('#triceratops');

triDino.style.width = '324px';

const changeColor = function() {
    span.style.color = 'orange';
}

span.addEventListener('click', changeColor);

const border = function() {
    triDino.style.border = 'thick solid red'
}

triDino.addEventListener('click', border);

const feathers = document.querySelector('#feathers');

const transparent = function() {
    feathers.style.opacity = '0.50';
}

feathers.addEventListener('click', transparent);

const row = document.querySelector('section#row');

const button = document.querySelector('button#toggle');

const rowColor = function() {
    row.style.backgroundColor = 'purple';
}

button.addEventListener('click', rowColor);

const birtha = document.querySelector('#biggify');

const makeWide = function() {
    birtha.style.width = '200px';
}

birtha.addEventListener('mouseover', makeWide);