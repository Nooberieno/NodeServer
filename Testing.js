

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

ctx.canvas.height=window.innerHeight
ctx.canvas.width=window.innerWidth

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
    var ElementTest = document.getElementById("FarmDrawer").style;

    ElementTest.position = "relative";

}

function reinstateButtons(){
    var ElementTest = document.getElementById("FarmDrawer").style;
    ElementTest.position = "absolute";
}

function LogValue(){
   let value = document.getElementById("inputbox").value;
   console.log(value)

}


document.onkeydown=(event)=>{
    switch(event.key){
        case "Enter":
            if (document.activeElement.id == 'inputbox') {
                LogValue();            
            }
            
            break;
    }
}
document.onkeyup=(event)=>{
    switch(event.key){
        case "Enter":
            break;
    }
}
