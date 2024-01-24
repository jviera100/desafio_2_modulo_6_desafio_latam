$(document).ready(function () {
});
// Tooltip initialization

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function () {
    // Tooltip initialization
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Evento click
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    // Selectores de etiqueta
    $("h2#ingredientes, h2#preparacion").dblclick(function () {
        $(this).css("color", "red");
    });

    // Selectores de clase
    $(".card-title").click(function () {
        $(".card-body").toggle();
    });
});
