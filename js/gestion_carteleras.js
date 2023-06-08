var carteleras = [];

function guardarCartelera() {
  var sala = document.getElementById("sala").value;
  var horario = document.getElementById("horario").value;
  var pelicula = document.getElementById("pelicula").value;
  var fechaInicio = document.getElementById("fechainicio").value;
  var fechaFinalizacion = document.getElementById("fechafinalizacion").value;

  if (sala === "" || horario === "" || pelicula === "" || fechaInicio === "" || fechaFinalizacion === "") {
    alert("Todos los campos son requeridos.");
    return;
  }

  var cartelera = {
    sala: sala,
    horario: horario,
    pelicula: pelicula,
    fechaInicio: fechaInicio,
    fechaFinalizacion: fechaFinalizacion,
    fechaCreacion: new Date().toLocaleString(),
    fechaModificacion: ""
  };

  carteleras.push(cartelera);

  alert("Cartelera guardada exitosamente.");

  limpiarCampos();
}

function buscarCartelera() {
  var sala = document.getElementById("sala").value;
  var horario = document.getElementById("horario").value;
  var pelicula = document.getElementById("pelicula").value;
  var fechaInicio = document.getElementById("fechainicio").value;
  var fechaFinalizacion = document.getElementById("fechafinalizacion").value;

  var carteleraEncontrada = null;
  for (var i = 0; i < carteleras.length; i++) {
    if (
      carteleras[i].sala === sala &&
      carteleras[i].horario === horario &&
      carteleras[i].pelicula === pelicula &&
      carteleras[i].fechaInicio === fechaInicio &&
      carteleras[i].fechaFinalizacion === fechaFinalizacion
    ) {
      carteleraEncontrada = carteleras[i];
      break;
    }
  }

  if (carteleraEncontrada) {
    document.getElementById("sala").value = carteleraEncontrada.sala;
    document.getElementById("horario").value = carteleraEncontrada.horario;
    document.getElementById("pelicula").value = carteleraEncontrada.pelicula;
    document.getElementById("fechainicio").value = carteleraEncontrada.fechaInicio;
    document.getElementById("fechafinalizacion").value = carteleraEncontrada.fechaFinalizacion;

    // Mostrar fecha de creación y modificación
    var fechaCreacion = carteleraEncontrada.fechaCreacion;
    var fechaModificacion = carteleraEncontrada.fechaModificacion;
    alert("Fecha de creación: " + fechaCreacion + "\nFecha de modificación: " + fechaModificacion);
  } else {
    alert("Cartelera no encontrada.");
  }
}

function modificarCartelera() {
  var sala = document.getElementById("sala").value;
  var horario = document.getElementById("horario").value;
  var pelicula = document.getElementById("pelicula").value;
  var fechaInicio = document.getElementById("fechainicio").value;
  var fechaFinalizacion = document.getElementById("fechafinalizacion").value;

  var carteleraEncontrada = null;
  for (var i = 0; i < carteleras.length; i++) {
    if (
      carteleras[i].sala === sala &&
      carteleras[i].horario === horario &&
      carteleras[i].pelicula === pelicula &&
      carteleras[i].fechaInicio === fechaInicio &&
      carteleras[i].fechaFinalizacion === fechaFinalizacion
    ) {
      carteleraEncontrada = carteleras[i];
      break;
    }
  }

  if (carteleraEncontrada) {
    carteleraEncontrada.sala = sala;
    carteleraEncontrada.horario = horario;
    carteleraEncontrada.pelicula = pelicula;
    carteleraEncontrada.fechaInicio = fechaInicio;
    carteleraEncontrada.fechaFinalizacion = fechaFinalizacion;
    carteleraEncontrada.fechaModificacion = new Date().toLocaleString();

    alert("Cartelera modificada exitosamente.");
    limpiarCampos();
  } else {
    alert("Cartelera no encontrada.");
  }
}

function eliminarCartelera() {
  var sala = document.getElementById("sala").value;
  var horario = document.getElementById("horario").value;
  var pelicula = document.getElementById("pelicula").value;
  var fechaInicio = document.getElementById("fechainicio").value;
  var fechaFinalizacion = document.getElementById("fechafinalizacion").value;

  var carteleraEncontradaIndex = -1;
  for (var i = 0; i < carteleras.length; i++) {
    if (
      carteleras[i].sala === sala &&
      carteleras[i].horario === horario &&
      carteleras[i].pelicula === pelicula &&
      carteleras[i].fechaInicio === fechaInicio &&
      carteleras[i].fechaFinalizacion === fechaFinalizacion
    ) {
      carteleraEncontradaIndex = i;
      break;
    }
  }

  if (carteleraEncontradaIndex !== -1) {
    carteleras.splice(carteleraEncontradaIndex, 1);
    alert("Cartelera eliminada exitosamente.");
    limpiarCampos();
  } else {
    alert("Cartelera no encontrada.");
  }
}

function limpiarCampos() {
  document.getElementById("sala").value = "";
  document.getElementById("horario").value = "";
  document.getElementById("pelicula").value = "";
  document.getElementById("fechainicio").value = "";
  document.getElementById("fechafinalizacion").value = "";
}
