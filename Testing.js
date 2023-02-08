

const CityImage = new Image();
CityImage.src = './city.png';

const FarmImage = new Image();
FarmImage.src = './farm.png'

const NightImage = new Image();
NightImage.src = './Night.png';

const DayCityImage = new Image();
DayCityImage.src = './Day.png';

const img5 = new Image();
img5.src = './forest.png';

const img6 = new Image();
img6.src = './road.png';

var canvas = document.getElementById("Testing");
var ctx = canvas.getContext("2d");
ctx.canvas.height=window.innerHeight
ctx.canvas.width=window.innerWidth

var pronouns=[]

function AddText(){
    ctx.font = "48px serif";
    ctx.fillText("Hello Motherfucker", 475, 300)
}

function drawCity(){
    ctx.drawImage(CityImage, 0, 0, window.innerWidth, window.innerHeight);
}

function drawFarm() {
    ctx.drawImage(FarmImage, 0, 0, window.innerWidth, window.innerHeight);
}

function drawNight(){
    ctx.drawImage(NightImage, 0, 0, window.innerWidth, window.innerHeight);
}

function drawDayCity(){
    ctx.drawImage(DayCityImage, 0, 0, window.innerWidth, window.innerHeight);
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
   pronouns.push(value)
   console.log(pronouns)
}


function ResetPronounArray(){
    pronouns.length=0
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
