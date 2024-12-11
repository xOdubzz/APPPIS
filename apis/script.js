document.getElementById("btn").addEventListener("click", function() {

    fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json())
        .then(data => {

            const user = data.results[0];


            const userInfo = `
                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <img src="${user.picture.large}" alt="Foto de ${user.name.first}" />
            `;

            document.getElementById("txt").innerHTML = userInfo;
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById("txt").innerHTML = "Hubo un error al obtener la información.";
        });
})

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radio = 70;  
var circuloradio = 40; 
var angulo = 0;  

function girar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 

  ctx.fillStyle = 'rgba(0, 0, 8, 1)';

  ctx.translate(canvas.width / 2, canvas.height / 2);

  var x = radio * Math.cos(angulo);
  var y = radio * Math.sin(angulo);

  ctx.beginPath();
  ctx.arc(x, y, circuloradio, 0, Math.PI * 2);
  ctx.fill();
  ctx.resetTransform();


  angulo += 0.02;


  requestAnimationFrame(girar);
}

girar();