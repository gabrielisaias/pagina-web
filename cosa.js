function capturarAlumnos() {
    const cantidadAlumnos = parseInt(document.getElementById('cantidad-alumnos').value);
    if (isNaN(cantidadAlumnos) || cantidadAlumnos < 5 || cantidadAlumnos > 20) {
        alert('Ingrese una cantidad válida de alumnos (entre 5 y 20).');
        return;
    }

    let alumnos = [];
    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombre = prompt(`Ingrese el nombre completo del alumno ${i + 1}:`);
        let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
        let genero = prompt(`Ingrese el género (Femenino/Masculino) de ${nombre}:`).toLowerCase();

        alumnos.push({ nombre, edad, genero });
    }

    const alumnoMayorEdad = obtenerMayorEdad(alumnos);
    mostrarResultado(alumnoMayorEdad);
}

function obtenerMayorEdad(alumnos) {
    let mayorEdad = 0;
    let alumnoMayorEdad = null;

    for (let alumno of alumnos) {
        if (alumno.edad > mayorEdad) {
            mayorEdad = alumno.edad;
            alumnoMayorEdad = alumno;
        }
    }

    return alumnoMayorEdad;
}

function mostrarResultado(alumno) {
    const nombreMayorEdadElement = document.getElementById('nombre-mayor-edad');
    const generoMayorEdadElement = document.getElementById('genero-mayor-edad');
    const entidadMilitarElement = document.getElementById('entidad-militar');

    nombreMayorEdadElement.textContent = alumno.nombre;
    generoMayorEdadElement.textContent = alumno.genero;

    if (alumno.edad > 14) {
        if (alumno.genero === 'femenino') {
            entidadMilitarElement.textContent = 'Fuerza Aérea';
            entidadMilitarElement.style.color = 'red';
        } else if (alumno.genero === 'masculino') {
            entidadMilitarElement.textContent = 'Marina de Guerra';
            entidadMilitarElement.style.color = 'green';
        }
    } else {
        entidadMilitarElement.textContent = 'Ejército Nacional';
        entidadMilitarElement.style.color = 'brown';
    }

    document.getElementById('resultados').style.display = 'block';
}
