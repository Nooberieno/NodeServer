const CityImage = new Image();
CityImage.src = './public/city.png';

const FarmImage = new Image();
FarmImage.src = './public/farm.png'

const NightImage = new Image();
NightImage.src = './public/Night.png';

const DayCityImage = new Image();
DayCityImage.src = './public/Day.png';

const ForestImage = new Image();
ForestImage.src = './public/forest.png';

const RoadImage = new Image();
RoadImage.src = './public/road.png';

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

function drawForest(){
    ctx.drawImage(ForestImage,0,0,window.innerWidth,window.innerHeight)
}

function drawRoad(){
    ctx.drawImage(RoadImage,0,0,window.innerWidth,window.innerHeight)
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
   const pronouns1 = pronouns[0]
   console.log(pronouns1)
}


function ResetPronounArray(){
    pronouns.length=0
}

function ajaxtest(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("get", "test.txt", true)
    xhttp.onreadystatechange = function(){
        if (xhttp.responseText !=""){
            var txt = xhttp.responseText.split("\n")
            document.getElementById("TextAdder").innerHTML = txt[0]
        }
    }
    xhttp.send()
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

function AddToFile(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("get", "/123", true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.onreadystatechange = function() {
        console.log(this.responseText)
        console.log(this.status)
        console.log(this.statusText)
    }
    xhttp.send()
}