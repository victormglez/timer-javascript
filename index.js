const durationInput = document.querySelector("#duration");
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const circle = document.querySelector("circle");

const P = circle.getAttribute('r') * 2 * Math.PI; //Perimetro
circle.setAttribute('stroke-dasharray', P);

let duration;

const timer = new Timer(durationInput, btnStart, btnPause, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', P * timeRemaining / duration - P);
    },
    onComplete(){ 
        console.log("Timer is completed");
    }
});