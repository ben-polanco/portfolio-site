//script.js
console.log("script called" )

window.onload = function(){
    console.log("DOM loaded" )
    //Drop cubes
    const html = Array.from({ length: 400 }, (_, i) => `
        <div class="cube">${i}
            <input name="check" type="checkbox" id="${i}"/>
            <label for="${i}"></label>
            <div class="tree"></div>
        </div>
    `).join('');

    document.querySelector('.container').innerHTML = html;

    //Drop buildings
    const building_locations =[22,56, 107]

    for (i=0; building_locations.length > i; i++){
        const buildingTest = document.getElementById(building_locations[i]);
        const cube = buildingTest.closest('.cube');
        cube.innerHTML += `<div class="building" id="building-${i}"></div>`;
    };

    const buildings = document.querySelectorAll('.building');
    
    buildings.forEach((building) => {
        const h4 = document.createElement('h4');
        h4.innerHTML = 'Smart Factories';
        building.parentNode.insertBefore(h4, building);
    });

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

    /*
    //Fade out title
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.title');
        var position = element.getBoundingClientRect();
        console.log(position);
        
        // Change these values to adjust when the element fades out
        var fadeStart = position.top + document.documentElement.clientHeight * 0.05;
        var fadeEnd = position.top + document.documentElement.clientHeight * 1;
        console.log("fadeStart: " + fadeStart);
        console.log("fadeEnd: " + fadeEnd);
        console.log("position: " + position.top);
        console.log()
        var opacity = 1;
        
        if (position.top < fadeStart) {
            opacity = 1;
            console.log("Still at top");
        } else if (position.top > fadeEnd) {
            opacity = 0;
            console.log("Reached the bottom");
        } else {
            opacity = 1 - (position.top - fadeStart) / (fadeEnd - fadeStart);
            console.log("Somewhere in the middle");
        }
        console.log("End Opacity: " + opacity);
        element.style.opacity = opacity;
    });
    */
};