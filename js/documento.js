$(document).ready(function () {

    $.get("https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
        function (data) {
            $.each(data, function (i, item) {
                $("#table").append("<tr><td>" + item.id +
                    "</td><td>" + item.nombre +
                    "</td><td>" + item.email +
                    "</td><td>" + '<button id="button1" class="borrar">Delet</button>' +
                    '<button id="button" class="editar">Edit</button>' +
                    "</td></tr>");


                //Eliminar
                var borrar = $('.borrar');
                borrar.click(function () {
                    $(this).parents('tr').remove();
                });

            });

        });

        var agregar = $('.agregar');
        agregar.click(function () {
            var num = parseInt(prompt('Ingrese numero siguiente de la tabla'));
            nombre = prompt('ingrese nombre');
            email = prompt('ingrese email');
    
            $("#table").append("<tr><td>" + num +
                "</td><td>" + nombre +
                "</td><td>" + email +
                "</td><td>" + '<button id="button1" class="borrar">Delet</button>' +
                '<button id="button" class="editar">Edit</button>' +
                "</td></tr>");

                //Eliminar
                var borrar = $('.borrar');
                borrar.click(function () {
                    $(this).parents('tr').remove();
                });
    
        });

});