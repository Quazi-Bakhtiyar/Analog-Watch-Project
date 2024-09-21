hours = document.querySelector("#hour")
minute = document.querySelector("#minute")
second = document.querySelector("#second")


function updateTime(){
    sec = new Date().getSeconds()
    min = new Date().getMinutes()
    hour = new Date().getHours()
    hour = 30*hour + 0.5*min;
    min = 6*min;
    sec = 6*sec;
    hours.style.transform = `rotate(${hour}deg)`
    minute.style.transform = `rotate(${min}deg)`
    second.style.transform = `rotate(${sec}deg)`
    console.log("hello")
}

function getRandomRGBColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    return rgbColor;
}


function color(){
    
    document.body.style.backgroundColor = getRandomRGBColor();

}

setInterval(color,1000)


setInterval(updateTime,1000);







