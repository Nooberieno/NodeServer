

const img1 = new Image();
img1.src = './city.png';

const img2 = new Image();
img2.src = './farm.png'

const img3 = new Image();
img3.src = './Night.png';

const img4 = new Image();
img4.src = './Day.png';

const img5 = new Image();
img5.src = './forest.png';

const img6 = new Image();
img6.src = './road.png';

var canvas = document.getElementById("Testing");
var ctx = canvas.getContext("2d");

drawCity();
function drawCity(){
    ctx.drawImage(img1, 0, 0, window.innerWidth, window.innerHeight);
}

function drawFarm() {
    ctx.drawImage(img2, 0, 0, window.innerWidth, window.innerHeight);
}


function drawNight(){
    ctx.drawImage(img3, 0, 0, window.innerWidth, window.innerHeight);
}

function drawDayCity(){
    ctx.drawImage(img4, 0, 0, window.innerWidth, window.innerHeight);
}

function deleteButtons(){
    var ElementTest = document.getElementById("CityDrawer").style;

    ElementTest.position = "relative";

}

function Test5(){
    var ElementTest = document.getElementById("CityDrawer").style;
    ElementTest.position = "absolute";
}

let Text=""
function Test6(){
    let Text = prompt("enter a name please")
    if (Text==""){
        alert("type a name dumbass")

    } else{
        alert(Text)
    }
}