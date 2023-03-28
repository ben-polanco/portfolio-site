//building_interactivity.js

//Add clickiness and display content card/overlay
const building = document.getElementById('building-0');
const contentCard = document.getElementById('content-card');
const overlay = document.querySelector('.overlay');

function toggleContent() {
    contentCard.classList.toggle('show');
    overlay.classList.toggle('show');
};

building.addEventListener('click', toggleContent);
overlay.addEventListener('click', toggleContent);
