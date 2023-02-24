let punti = localStorage.getItem('punteggio');

var risposteSbagliate = 10 - punti;

var percentualeCorrette = (punti/10)*100;
var percentualeSbagliate = (risposteSbagliate/10)*100;

var progress = percentualeCorrette; // Imposta la percentuale completata del grafico ad anello

// const circle = document.querySelector('.progress-ring__circle');
// const text = document.querySelector('text');


// setProgress(progress);

// function setProgress(percent) {
//   circle.style.setProperty('--progress', percent);
//   if(punti > 5){
//     text.innerHTML = 'Congratulations! You passed the exam!';  
//   }
//   else{
//     text.innerHTML = 'What a pity! You didn\'t passed the exam!';  
//   }
// }

window.onload = function() {
  var can = document.getElementById('canvas'),
      spanProcent = document.getElementById('procent'),
       c = can.getContext('2d');
 
  var posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      result = oneProcent * percentualeCorrette;
  
  c.lineCap = 'round';
  arcMove();
  
  function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent;

      // spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc( posX, posY, 150, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
      c.strokeStyle = '#D20094';
      c.lineWidth = '40';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#18FFFF';
      c.lineWidth = '40';
      c.arc( posX, posY, 150, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
  }
  
  
}

document.getElementById('correct').innerHTML = `${percentualeCorrette}%`;
document.getElementById('wrong').innerHTML = `${percentualeSbagliate}%`;

document.getElementById('pCorrette').innerHTML = `${punti} / 10 questions`;
document.getElementById('pErrate').innerHTML = `${risposteSbagliate} / 10 questions`;

if(punti > 5){
  document.getElementById('esito').innerHTML = 'Congratulations! You passed the exam!';  
}
else{
      document.getElementById('esito').innerHTML = 'What a pity! You didn\'t passed the exam!';  
}

