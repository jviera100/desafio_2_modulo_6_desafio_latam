# link JQuery en HTML
 <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

# Extension JQuery
 Extension JQuery Code Snippets: autocompleta estructura de eventos de JQuery, es decir autocompleta codigos
# sintaxis JQuery
 sintaxis JQuery carga document.ready y aplicas esta funcion 
 $(document).ready(function(){
# EVENTOS O ACCIONES EN JQUERY en JS
# click
mouse hace click sobre el elemento y lo oculta
 $("#texto").click(function(){
 $(this).hide();
 });
# click
mouse hace click sobre el elemento y lo cambia a color rojo
  $("#texto").click(function(){
 $(this).css("color","red");
 });
# dblclick
mouse hace doble click sobre el elemento y lo cambia a color azul
   $("#texto").dblclick(function(){
 $(this).css("color","blue");
 });
# mouseover
mouse pasa sobre el elemento y lo cambia a color amarillo
    $(".caja").mouseover(function(){
 $(this).css("background-color","yellow");
 });
# mouseout
 mouse sale del elemento y lo cambia a color rojo
    $(".caja").mouseout(function(){
 $(this).css("background-color","red");
 });
# hover  
 $("p").hover(function(){
 $(this).html("<a hef='#'>Me convertí</a>");
 });
 });
 En resumen, cuando pasas el ratón sobre un párrafo (<p>), el contenido del párrafo se reemplaza por un enlace que dice "Me convertí".
