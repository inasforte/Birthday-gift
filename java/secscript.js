let canvasS1 = document.getElementById('inas'),
    context = canvasS1.getContext('2d');

canvasS1.style.display = "block";
canvasS1.style.margin = "60px auto";
context.font = "36px Tahoma";
context.save();
context.fillStyle = '#6e78e95e';
context.beginPath();
context.moveTo(0, 0);
context.lineTo(0, 600);
context.lineTo(900, 600);
context.lineTo(900, 0)
context.closePath();
context.fill();

context.shadowColor = "rgba(0,0,0,0.3)";
context.shadowBlur = 5;
context.shadowOffsetX = "4";
context.shadowOffsetY = "4";
context.font = "65px Tahoma";
context.widtthline = 16;
context.fillStyle = '#673ab7ba';
context.fillText('Happy Birthday ', 149, 224);
context.font = "50px Tahoma";
context.fillText('Anosa', 190, 355);
context.fillText(' & ', 320, 355);
context.fillText('Nabrosa', 375, 355);
context.font = "69px Tahoma";
context.strokeStyle = '#673ab76e';
context.strokeText('Happy', 149, 224);
context.strokeText('Birthday', 348, 224);
context.restore();
context.restore();
context.save();
context.moveTo(499, 520);
context.lineTo(632, 520);
context.stroke();
context.font = "13px Tahoma";
context.fillStyle = '#000';
context.textAlign = "Start";
context.fillText('You Are The Best Ever 💕', 496, 500);
