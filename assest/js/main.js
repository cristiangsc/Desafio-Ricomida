$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()

    $("#enviarCorreo").click(() => {
        alert("El correo fue enviado correctamente...");
    });

    $("h4 u.ingrediente").dblclick(() => {
        $(".ingrediente").css("color", "red")
    });

    $("h4 u.preparacion").dblclick(() => {
        $(".preparacion").css("color", "red")

    });

    $(".card1").click(() => {
        $(".text1-ocultar").toggle();
    });

    $(".card2").click(() => {
        $(".text2-ocultar").toggle();
    });
    $(".card3").click(() => {
        $(".text3-ocultar").toggle();
    });

})