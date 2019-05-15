var canvasRef=document.getElementById("myCanvas")
var ctx= canvasRef.getContext("2d")
//draw line
ctx.moveTo(0,0)
ctx.lineTo(300,300)
ctx.stroke()
ctx.stokeText("hellow")
ctx.stokeText("Hello Canvas",10,200)
ctx.fillstyle="rgba(0,200,0,0.5)"
ctx.fillRect(75,75,75,75)





