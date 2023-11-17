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
        rutinaElement.innerHTML = obtenerRutinaEjercicios(imc, sexo);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function obtenerRutinaEjercicios(imc, sexo) {
    var rutinaElement = document.getElementById('rutina');

    if (imc < 18.5) {
        mostrarDocumento(C:\Users\Ryzen 5 3600\Documents\TallerITU\bajo_peso.html, rutinaElement);
        return 'Rutina de ejercicios recomendada para bajo peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        mostrarDocumento(peso_normal.html, rutinaElement);
        return 'Rutina de ejercicios recomendada para peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        mostrarDocumento('sobrepeso.html', rutinaElement);
        return 'Rutina de ejercicios recomendada para sobrepeso.';
    } else {
        if (sexo === 'masculino') {
            mostrarDocumento('obesidad_hombres.html', rutinaElement);
            return 'Rutina de ejercicios recomendada para obesidad en hombres.';
        } else {
            mostrarDocumento('obesidad_mujeres.html', rutinaElement);
            return 'Rutina de ejercicios recomendada para obesidad en mujeres.';
        }
    }
}

function mostrarDocumento(documento, elemento) {
    // Carga el contenido del documento en el elemento especificado
    fetch(documento)
        .then(response => response.text())
        .then(content => {
            elemento.innerHTML = content;
        })
        .catch(error => {
            console.error('Error al cargar el documento:', error);
        });
}
