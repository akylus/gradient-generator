var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.getElementById("code");
var body = document.getElementById("gradient");

function colorPick() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorPick);
color2.addEventListener("input", colorPick);