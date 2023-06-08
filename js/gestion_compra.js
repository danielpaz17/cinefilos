var compras = [];

function guardarCompra() {
  var numero = document.getElementById("numero").value;
  var sucursal = document.getElementById("sucursal").value;
  var peliculas = document.getElementById("peliculas").value;
  var cantidades = document.getElementById("cantidades").value;
  var precio = document.getElementById("precio").value;
  var subtotal = document.getElementById("subtotal").value;
  var total = document.getElementById("total").value;
  var fecha = document.getElementById("fecha").value;

  if (numero === "" || sucursal === "" || peliculas === "" || cantidades === "" || precio === "" || subtotal === "" || total === "" || fecha === "") {
    alert("Todos los campos son requeridos.");
    return;
  }

  var compra = {
    numero: numero,
    sucursal: sucursal,
    peliculas: peliculas,
    cantidades: cantidades,
    precio: precio,
    subtotal: subtotal,
    total: total,
    fecha: fecha,
    fechaCreacion: new Date().toLocaleString(),
    fechaModificacion: ""
  };

  compras.push(compra);

  alert("Compra guardada exitosamente.");

  limpiarCampos();
}

function consultarCompra() {
  var numero = document.getElementById("numero").value;

  var compraEncontrada = null;
  for (var i = 0; i < compras.length; i++) {
    if (compras[i].numero === numero) {
      compraEncontrada = compras[i];
      break;
    }
  }

  if (compraEncontrada) {
    document.getElementById("numero").value = compraEncontrada.numero;
    document.getElementById("sucursal").value = compraEncontrada.sucursal;
    document.getElementById("peliculas").value = compraEncontrada.peliculas;
    document.getElementById("cantidades").value = compraEncontrada.cantidades;
    document.getElementById("precio").value = compraEncontrada.precio;
    document.getElementById("subtotal").value = compraEncontrada.subtotal;
    document.getElementById("total").value = compraEncontrada.total;
    document.getElementById("fecha").value = compraEncontrada.fecha;

    // Mostrar fecha de creación y modificación
    var fechaCreacion = compraEncontrada.fechaCreacion;
    var fechaModificacion = compraEncontrada.fechaModificacion;
    alert("Fecha de creación: " + fechaCreacion + "\nFecha de modificación: " + fechaModificacion);
  } else {
    alert("Compra no encontrada.");
  }
}

function modificarCompra() {
  var numero = document.getElementById("numero").value;

  var compraEncontrada = null;
  for (var i = 0; i < compras.length; i++) {
    if (compras[i].numero === numero) {
      compraEncontrada = compras[i];
      break;
    }
  }

  if (compraEncontrada) {
    compraEncontrada.numero = numero;
    compraEncontrada.sucursal = document.getElementById("sucursal").value;
    compraEncontrada.peliculas = document.getElementById("peliculas").value;
    compraEncontrada.cantidades = document.getElementById("cantidades").value;
    compraEncontrada.precio = document.getElementById("precio").value;
    compraEncontrada.subtotal = document.getElementById("subtotal").value;
    compraEncontrada.total = document.getElementById("total").value;
    compraEncontrada.fecha = document.getElementById("fecha").value;
    compraEncontrada.fechaModificacion = new Date().toLocaleString();

    alert("Compra modificada exitosamente.");

    limpiarCampos();
  } else {
    alert("Compra no encontrada.");
  }
}

function eliminarCompra() {
  var numero = document.getElementById("numero").value;

  var compraIndex = -1;
  for (var i = 0; i < compras.length; i++) {
    if (compras[i].numero === numero) {
      compraIndex = i;
      break;
    }
  }

  if (compraIndex !== -1) {
    compras.splice(compraIndex, 1);

    alert("Compra eliminada exitosamente.");

    limpiarCampos();
  } else {
    alert("Compra no encontrada.");
  }
}

function calcularTotal() {
  var precio = parseFloat(document.getElementById("precio").value);
  var cantidades = parseFloat(document.getElementById("cantidades").value);

  if (isNaN(precio) || isNaN(cantidades)) {
    alert("Los valores de precio y cantidades deben ser numéricos.");
    return;
  }

  var subtotal = precio * cantidades;
  var total = subtotal;

  document.getElementById("subtotal").value = subtotal.toFixed(2);
  document.getElementById("total").value = total.toFixed(2);
}

function limpiarCampos() {
  document.getElementById("numero").value = "";
  document.getElementById("sucursal").value = "";
  document.getElementById("peliculas").value = "";
  document.getElementById("cantidades").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("subtotal").value = "";
  document.getElementById("total").value = "";
  document.getElementById("fecha").value = "";
}