let inputEl = document.getElementById("input");

let containerEl = document.getElementById("container");

let activity = document.getElementById("myLabel");

containerEl = addEventListener("submit", ()=>{

	let val = inputEl.value;
	activity.innerText = val;

});