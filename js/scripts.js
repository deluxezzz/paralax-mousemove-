let paralax = document.querySelector('.paralax');

let paralaxClouds = document.querySelector('.paralax__clouds');
let paralaxMountains = document.querySelector('.paralax__mountains');
let paralaxHuman = document.querySelector('.paralax__human');

paralax.addEventListener ('mousemove', function(e){
    let positionX = e.pageX - (window.innerWidth / 2);
    let positionY = e.pageY - (window.innerHeight / 2);
    console.log(e.pageY)
    paralaxClouds.style.cssText = `transform: translate(${positionX/420}%,${positionY/260}%);`;
    paralaxMountains.style.cssText = `transform: translate(${positionX/600}%,${positionY/300}%);`;
    paralaxHuman.style.cssText = `transform: translate(${positionX/800}%,${positionY/400}%);`;

});


        
