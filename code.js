var carregou = false;
 var objetos = []
 var precisão = 0
 var imagem = localStorage.getItem("img")
function setup(){
    canvas = createCanvas(640,420);
    canvas.position(windowWidth/2-320,windowHeight/2-200);

    robo= ml5.objectDetector('cocossd', modelRealy)

    document.getElementById("status").innerHTML = "Detectando objetos..."
}
function modelRealy(){
    console.log("o indentificador de objetos está pronto! :D");
    robo.detect(img, gotR)
}
function gotR(erro,r){
    if(erro){
        console.log(erro)
    }else{
        console.log(r);
        objetos = r ;
        carregou = true;
    }
}
function draw(){
    image(img,0,0,640,420);
if(carregou){  
document.getElementById("status").innerHTML = "Objeto detectado."
document.getElementById("qdo").innerHTML = "O modelo CocoSSD detectou "+objetos.length+" objeto"
for(var i = 0; i < objetos.length; i++){
stroke("red")
noFill()
rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height)
fill("red")
textSize(20)
textAlign("center")
precisão = Math.round(objetos[i].confidence*100)
text(objetos[i].label+" "+precisão+"%",objetos[i].x+50,objetos[i].y+30)}

 

}}
function preload(){
    img =  loadImage(imagem);
}
function voltar(){
    window.location = "index.html"
}