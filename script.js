const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

// creating a function to set & get current time 
function time() {
    const currentTime = new Date();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    const hour = currentTime.getHours();
    const timeInterval = 6;

    console.log(currentTime)

    secondHand.style.transform = 'rotate(' + (second * timeInterval) + 'deg)'
    minuteHand.style.transform = 'rotate(' + (minute * timeInterval + second / 10) + 'deg)';
    hourHand.style.transform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)'

}

time();

// call time function in every 1 second 
setInterval(time, 1000);