function svars(){
	x = Number(ievade.value);
 	document.getElementById("info").innerHTML = x;
}

$(function() {
    $("#redzams1").click(function() {
     $('#invisible').toggleClass("show");
    });  
    });

$(function() {
		$("#redzams2").click(function() {
		 $('#invisible2').toggleClass("show");
		});  
		});	


$(function() {
		$("#redzams3").click(function() {
		 $('#invisible3').toggleClass("show");
		});  
		});		

function draw(){

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//smiley
context.fillStyle = 'Gold';
context.strokeStyle = 'black';
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//eyes
context.fillStyle = 'black';
context.beginPath();
context.arc(270, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(370, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//mouth
context.strokeStyle = 'black';
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 150, 0, -1 * Math.PI);
context.stroke();
context.closePath();


 context.font='30px Arial Black';
 context.fillText("Ceru ka ši informācija noderēja.", 80,500);

}