
# RESUMEN 
- ctrl + k + c mantiene el boton ctrl apretado para presiona k despues c queda como comentario
- JavaScript es sencible a las mayusculas y espacios. Poner punto y coma al final de cada funcion
# alert();
- alert("soy ventana de alerta"); muestra en navegador una ventana pequeña de alerta
- alert("soy texto" + soyvariable); muestra en navegador una ventana con texto y valor variable
# console.log();
- console.log("soy texto en consola"); muestra en consola del navegador texto de color negro cuando lleva comillas
- console.log("10"); muestra en consola numero de color negro como texto(o string) cuando lleva comillas
- console.log(10); muestra en consola valor numero de color azul cuando no lleva comillas
- console.log(true); muestra en consola valor true de color azul cuando no lleva comillas
- console.log(false); muestra en consola valor false de color azul cuando no lleva comillas
- console.log(soyvariable); muestra en consola valor de variable o muestra linea de error de color rojo, en este caso la consola mostrara como resultado un numero 7 de color azul
- console.log("soy texto" + soyvariable); muestra en consola texto y numero, todo de color negro, poner funcion de console debajo de nueva variable, para que muestre variable nueva
# variables
- soyvariable = 3 + 4  mala practica poner en js una variable, sin palabra reservada let o const
- let soyvariable = 3 + 4  buena practica poner en js una variable, con palabra reservada let o const
- soyvariable = 20  cambia valor de una variable en js, sin palabra reservada let o const
- let soyvariable = "soy texto"; en js si el valor de la variable es un texto debe llevar comillas o si en js ponemos la variable dentro de la funcion console, mostrara error en consola
- "use strict" modo estricto se pone en la cabecera del js, dara error las malas practicas, ejemplo de mala practica digitas una variables y despues le cambias el valor a esa variable, ambas sin palabra reservada let, la buena practica es cuando la primera vez que digitas la variable debe llevar let, despues cuando le cambias su valor a la variable no se pone let
- el nombre de las variables declaradas (digitadas en js) no se pueden repetir
# palabras reservadas de variables 
- var: obsoleto, da error en scope global
- let : se utiliza para declarar una variable, o sea una variable donde se puede guardar un valor. El valor   de una variable puede cambiar a lo largo del programa.
- const: se utiliza para declarar una constante, o sea una variable que no va a cambiar su valor
# document.write();
- document.write("soy texto" + soyvariable); muestra en navegador texto y valor variable
# prompt();
- prompt(): es una función de JavaScript que muestra una ventana con un mensaje en pantalla y espera que el usuario ingrese un valor. El valor siempre será un texto (string).
- Ejemplo:
- let soyvariableprompt = prompt("soy texto"); ventana con pregunta interactiva y con espacio para que usuario responda texto
- alert("soy texto" + soyvariableprompt); ventana mostrando texto y valor de variable que es la respuesta del usuario
# parseInt();
- parseInt(): es una función de JavaScript que convierte un texto a un número entero
- Ejemplo:
- let soyvariable = parseInt(prompt("soy texto")); ventana con pregunta interactiva y con espacio para que usuario responda numeros
- alert("soy texto" + soyvariable); ventana mostrando texto y valor de variable que es la respuesta del usuario
# tablas
- tr es fila
- th es columna menu poner ID
- td es columna respuestas
# document.getElementById();
- document.getElementById("soyID") es una función de JavaScript que captura un elemento que tiene un id="soyID" del html y ese dato capturado  es el valor de la variable
- Ejemplo:
- let soyvariable = document.getElementById("soyID")
# inner.HTML();
- inner.HTML() es una función de JavaScript que permite cambiar el contenido de un elemento del HTML por otro valor y mostrarlo en el navegador
- Ejemplo:
- soyvariabledelgetElementById.innerHTML = soyvariabledelprompt
- en este ejemplo en js la variable document.getElemenById tiene el valor de una captura de un ID del html con la funcion inner.HTML, se cambia el valor de ese ID por el Prompt y lo introduce en ese ID del HTML
# scope
- El atributo scope se utiliza para especificar si una celda de encabezado es un encabezado para una columna, fila o grupo de columnas o filas en una tabla.
- Ejemplo:
- th scope = "col">nombre columna/th se define la columna th como columna

# scroll o desplazamiento en 8 segundos
tambien hay un scroll en CSS, pero este es de JS
<script>
$(document).ready(function(){
 $("a").on('click', function(event) {
 if (this.hash !== "") {
 event.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
 scrollTop: $(hash).offset().top
 }, 800, function(){
 
 window.location.hash = hash;
 });
 }
 });
});
</script>


# Tipos de datos:
- String: es un texto o cadena de texto = "Hola Mundo"
- Number: es un número, por ejemplo 10
- Boolean: es un valor lógico, true o false
# Operadores aritméticos:
+ : suma 
- : resta
* : multiplicación
/ : división
% : módulo o resto de la división 
# Operadores de comparación:
== : igual a (Comparar si dos valores son iguales ejemplo "10" == 10 es true)
=== : igualdad Estricta = (Compara si dos valores son iguales y si son del mismo tipo de dato ejemplo "10" === 10 es false) 
!= : diferente de - Comparar si dos valores son diferentes ejemplo 10 != 10 es false
> : mayor que : ejemplo 10 > 5 es true 
< : menor que
>= : mayor o igual que 
# Material para complementar
- https://jonmircha.com/javascript
- https://lenguajejs.com/javascript/



