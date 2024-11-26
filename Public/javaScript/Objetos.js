
     const nombre = prompt("¿Cuál es tu Nombre?");
     const apellido = prompt("¿Cuál es tu Apellido?");
     const mail = prompt("¿Cuál es tu e-Mail?");
     const Nacionalidad= prompt("¿Cuál es tu Nacionalidad?");


    //  let h1 = document.createElement("h1")
    //  h1.textContent = "Plataforma 5"
    //  let div = document.createElement("div")
    //  div.appendChild(h1)


 document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('Ojetos');
        
    const form = document.createElement('form');
    
        // Nombre y Apellido
       
    const labelNombre = document.createElement('label');
    labelNombre.textContent = 'Nombre:';
    const inputNombre = document.createElement('input');
    inputNombre. type  = 'text';
    inputNombre. name = 'Nomnre';
    inputNombre.required = true;

    const labelApellido = document.createElement('label');
    labelApellido.textContent = ' Apellido:';
    const inputApellido = document.createElement('input');
    inputApellido.type = 'text';
    inputApellido.name = 'Apellido';
    inputApellido.required = true;
    
        // E mail
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'mail:';
    const inputEmail = document.createElement('input');
    inputEmail.type = 'mail';
    inputEmail.name = 'mail';
    inputEmail.placeholder = 'Escribe tu mail';
    inputEmail.required = true;
    
        // Género
    const labelGenero = document.createElement(" p");
    labelGenero.textContent = 'Género:';
    
    const generos = ['Femenino', 'Masculino', 'Otro' ];
    generos.forEach(genero => {
        const inputGenero = document.createElement('input');
        inputGenero.type = 'radio';
        inputGenero.name = 'genero';
        inputGenero.value = genero;
        inputGenero.required = true;
    
        const labelGeneroRadio = document.createElement('label');
        labelGeneroRadio.textContent = genero;
        form.appendChild(inputGenero);
        form.appendChild(labelGeneroRadio);
        form.appendChild(document.createElement('br'));
    });
    
        // Rango de Edad
    const labelEdad = document.createElement('label');
    labelEdad.textContent = 'Rango de Edad:';
    const selectEdad = document.createElement('select');
    selectEdad.name = 'edad';
    selectEdad.required = true;
    
    const edades = ['Menor a 18 años', '19-30', '31-45', '46-55', 'Mayor a 56'];
    edades.forEach(edad => {
        const option = document.createElement('option');
        option.value = edad;
        option.textContent = edad;
        selectEdad.appendChild(option);
    });
    
        // Nacionalidad
    const labelArgentino = document.createElement('label');
    labelArgentino.textContent = '¿Eres argentino?';
    const inputArgentino = document.createElement('input');
    inputArgentino.type = 'checkbox';
    inputArgentino.name = 'argentino';
    inputArgentino.value = 'argentino';
    
        // Botón Enviar
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Enviar';
    
        // Añadir los elementos al formulario//
    form.appendChild(labelApellido);
    form.appendChild(inputApellido);
    form.appendChild(document.createElement('br'));
    
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(document.createElement('br'));
    
    form.appendChild(labelGenero);
    
    form.appendChild(labelEdad);
    form.appendChild(selectEdad);
    form.appendChild(document.createElement('br'));
    
    form.appendChild(inputArgentino);
    form.appendChild(labelArgentino);
    form.appendChild(document.createElement('br'));
    
    form.appendChild(submitButton);
    
        // Añadir el formulario al contenedor
    container.appendChild(form);

      } )
