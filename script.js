
//Styling body

document.body.style.background = "black";
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.textAlign = "center";

//Creating main container

var box = document.createElement("div");
box.id = "container";
document.body.appendChild(box);

//styling main container

document.getElementById("container").style.background = "#4C98EA";
document.getElementById("container").style.height = "300px";
document.getElementById("container").style.width = "100%";
document.getElementById("container").style.margin = "0px";
document.getElementById("container").style.display = "flex";
document.getElementById("container").style.flexDirection = "column";
document.getElementById("container").style.placeItems = "center";
document.getElementById("container").style.justifyContent = "space-evenly";

//creating data card

var stats = document.createElement("div");
stats.id = "stats";
box.appendChild(stats);

//styling data card

document.getElementById("stats").style.display = "flex";
document.getElementById("stats").style.flexDirection = "row";
document.getElementById("stats").style.width = "100%";
document.getElementById("stats").style.justifyContent = "space-evenly";

//creating score card

var scor = document.createElement("div");
scor.id = "score";
stats.appendChild(scor);

//styling score card

document.getElementById("score").style.display = "flex";
document.getElementById("score").style.flexDirection = "column";
document.getElementById("score").style.placeItems = "center";

//creating score caption

let point = document.createElement("div");
point.id = "score";
scor.appendChild(point);
document.getElementById("score").innerHTML += "SCORE";

//styling score caption

document.getElementById("score").style.fontFamily = "verdana";
document.getElementById("score").style.fontSize = "20px";
document.getElementById("score").style.color = "#cde7ba";

//creating score value

var scr = document.createElement("span");
scr.id = "scr";
scor.appendChild(scr);
document.getElementById("scr").innerHTML += `0`;

//styling score value

document.getElementById("scr").style.fontFamily = "Comic Sans MS";
document.getElementById("scr").style.fontSize = "30px";
document.getElementById("scr").style.color = "#e7f6bf";

//creating title text

let ban = document.createElement("h4");
ban.id = "heading";
stats.appendChild(ban);
document.getElementById("heading").innerHTML += "Word Relay";

//styling title text

document.getElementById("heading").style.fontSize = "25px";
document.getElementById("heading").style.fontFamily = "sans-serif";
document.getElementById("heading").style.color = "hsla(212, 73%, 73%, 1)";
document.getElementById("heading").style.letterSpacing = "2px";
document.getElementById("heading").style.height = "100%";
document.getElementById("heading").style.placeItems = "center";

//creating time card

var clock = document.createElement("div");
clock.id = "clock";
stats.appendChild(clock);

//styling time card

document.getElementById("clock").style.display = "flex";
document.getElementById("clock").style.flexDirection = "column";
document.getElementById("clock").style.placeItems = "center";

//creating time caption

let time = document.createElement("div");
time.id = "time";
clock.appendChild(time);
document.getElementById("time").innerHTML += "TIME";

//styling time caption

document.getElementById("time").style.fontFamily = "verdana";
document.getElementById("time").style.fontSize = "20px";
document.getElementById("time").style.color = "#cde7ba";

//creating time value

var sec = document.createElement("span");
sec.id = "sec";
clock.appendChild(sec);
document.getElementById("sec").innerHTML += `60`;

//styling time value

document.getElementById("sec").style.fontFamily = "Comic Sans MS";
document.getElementById("sec").style.fontSize = "30px";
document.getElementById("sec").style.color = "#e7f6bf";

//creating word card

var phrase = document.createElement("span");
phrase.id = "phrase";
box.appendChild(phrase);
document.getElementById("phrase").innerHTML += `Double-Tap Start Button!`;

//styling word card

document.getElementById("phrase").style.textAlign = "center";
document.getElementById("phrase").style.fontSize = "35px";
document.getElementById("phrase").style.color = "white";

//creating start button

var btn = document.createElement("button");
btn.id = "start";
box.appendChild(btn);
document.getElementById("start").innerHTML += "START";

//styling start button

document.getElementById("start").style.height = "50px";
document.getElementById("start").style.width = "20%";
document.getElementById("start").style.borderRadius = "15px";
document.getElementById("start").style.border = "none";
document.getElementById("start").style.background = "#FF7373";
document.getElementById("start").style.boxShadow = "0px 5px 0px 0px #CE4646";
document.getElementById("start").style.fontFamily = "serif";
document.getElementById("start").style.fontSize = "15px";
document.getElementById("start").style.letterSpacing = "2px";
document.getElementById("start").style.color = "white";

//creating input box
 
var uinput = document.createElement("input");
uinput.type = "text";
uinput.id = "user";
uinput.name = "typed";
uinput.placeholder = "Type the word...";
box.appendChild(uinput);

//styling input box

document.getElementById("user").style.display = "none";
document.getElementById("user").style.width = "50%";
document.getElementById("user").style.maxWidth = "auto";
document.getElementById("user").style.height = "40px";
document.getElementById("user").style.borderRadius = "15px";
document.getElementById("user").style.border = "none";
document.getElementById("user").style.padding = "5px";
document.getElementById("user").style.textAlign = "center";
document.getElementById("user").style.fontSize = "30px";

//creating credits

let credits = document.createElement("div");
credits.id = "credits";
document.body.appendChild(credits);
document.getElementById("credits").innerHTML += "<p>Created by </p><p>SUBHAJIT MAJI</p>  & <p>SATWATO DEY</p>";

//styling credits

document.getElementById("credits").style.color = "#101518";
document.getElementById("credits").style.marginTop = "10%";
document.getElementById("credits").style.fontFamily = "Segoe UI";
document.getElementById("credits").style.fontWeight = "bold";