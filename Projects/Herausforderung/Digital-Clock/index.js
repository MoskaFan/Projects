const hourEl = document.getElementById("hourBerlin");
const munuteEl = document.getElementById("minuteBerlin");
const secondEl = document.getElementById("secondBerlin");
const ampmEl = document.getElementById("ampmBerlin");

const hourEl1 = document.getElementById("hourIrkutsk");
const munuteEl1 = document.getElementById("minuteIrkutsk");
const secondEl1 = document.getElementById("secondIrkutsk");
const ampmEl1 = document.getElementById("ampmIrkutsk");

const d = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock(){
	let h = d.slice(10,12);
	let m = d.slice(14,15);
	let s = d.slice(17,18);
	hours.innerText = h;
	minutes.innerText = m;
	seconds.innerText = s;
}

updateClock();

function updateClock(){
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let k = h+6;
    let ampm = "AM"
    if (h > 12){
        h = h - 12
        ampm = "PM"
    }
    let ampm1 = "AM"
    if (k > 12){
        k = k - 12
        ampm1 = "PM"
    }
    h = h<10? "0" + h:h;
    hourEl.innerText = h;
    munuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);

    hourEl1.innerText = k;
    munuteEl1.innerText = m;
    secondEl1.innerText = s;
    ampmEl1, (innerText = ampm1);

    setTimeout(()=>{
        updateClock()
    },1000)
}


updateClock();