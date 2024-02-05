const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds * 6) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (minutes * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    
}

setInterval(setDate, 1000);