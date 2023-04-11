let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  
  .pauseFor(2500)
  .typeString('<span style="color: #7ae3cd;"> Estudiante de Ingenieria en Tecnologias de la Informacion y Comunicaciones.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
