"use strict";
signature()
function signature(){
    let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.fillRect(0,0,300,300)

   context.fillStyle = "purple";
   context.fillRect(25,25,250,50)    
   context.fillRect(75,75,150,50)
   context.fillRect(125,125,50,50)
   context.fillRect(125,125,50,150)
   context.fillRect(25,125,50,50)
   context.fillRect(225,125,50,50)




 



}