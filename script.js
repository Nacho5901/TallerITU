function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if (nombre && edad && sexo && altura && peso) {
        var imc = peso / ((altura / 100) * (altura / 100));
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = 'Hola ' + nombre + ', tu IMC es: ' + imc.toFixed(2);

        var rutinaElement = document.getElementById('rutina');
        var mensaje = obtenerRutinaEjercicios(imc, sexo);
        rutinaElement.innerHTML = mensaje;

        // Llamar a mostrarDocumento solo si se recomienda una rutina
        if (mensaje.includes('Rutina de ejercicios recomendada')) {
            mostrarDocumento(mensaje.split(' ')[5]);
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function obtenerRutinaEjercicios(imc, sexo) {
    var categoriaIMC;

    if (imc < 18.5) {
        categoriaIMC = 'bajo_peso.html';
        return 'Rutina de ejercicios recomendada para bajo peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoriaIMC = 'peso_normal.html';
        return 'Rutina de ejercicios recomendada para peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        categoriaIMC = 'sobrepeso.html';
        return 'Rutina de ejercicios recomendada para sobrepeso.';
    } else {
        if (sexo === 'masculino') {
            categoriaIMC = 'obesidad_hombres.html';
            return 'Rutina de ejercicios recomendada para obesidad en hombres.';
        } else {
            categoriaIMC = 'obesidad_mujeres.html';
            return 'Rutina de ejercicios recomendada para obesidad en mujeres.';
        }
    }
}

function mostrarDocumento(documento) {
    // Carga el contenido del documento desde GitHub Pages
    fetch(`https://nacho5901.github.io/TallerITU/${documento}`)
        .then(response => response.text())
        .then(content => {
            var rutinaElement = document.getElementById('rutina');
            rutinaElement.innerHTML = content;
        })
        .catch(error => {
            console.error('Error al cargar el documento:', error);
        });
}
