var ventas = [];

    function guardarVenta() {
      var sala = document.getElementById("sala").value;
      var horario = document.getElementById("horario").value;
      var numeroTiquetes = document.getElementById("numerotiquetes").value;
      var posiciones = document.getElementById("posiciones").value;
      var formaPago = document.getElementById("formapago").value;
      var cliente = document.getElementById("cliente").value;
      var fechaVenta = document.getElementById("fechaventa").value;
      var vendedor = document.getElementById("vendedor").value;

      if (sala === "" || horario === "" || numeroTiquetes === "" || posiciones === "" || formaPago === "" || cliente === "" || fechaVenta === "" || vendedor === "") {
        alert("Todos los campos son requeridos.");
        return;
      }

      var venta = {
        sala: sala,
        horario: horario,
        numeroTiquetes: numeroTiquetes,
        posiciones: posiciones,
        formaPago: formaPago,
        cliente: cliente,
        fechaVenta: fechaVenta,
        vendedor: vendedor
      };

      ventas.push(venta);
      console.log(ventas);
      limpiarCampos();
    }

    function buscarVenta() {
      var sala = document.getElementById("sala").value;
      var horario = document.getElementById("horario").value;
      var numeroTiquetes = document.getElementById("numerotiquetes").value;
      var posiciones = document.getElementById("posiciones").value;
      var formaPago = document.getElementById("formapago").value;
      var cliente = document.getElementById("cliente").value;
      var fechaVenta = document.getElementById("fechaventa").value;
      var vendedor = document.getElementById("vendedor").value;

      var ventaEncontrada = null;
      for (var i = 0; i < ventas.length; i++) {
        if (
          ventas[i].sala === sala &&
          ventas[i].horario === horario &&
          ventas[i].numeroTiquetes === numeroTiquetes &&
          ventas[i].posiciones === posiciones &&
          ventas[i].formaPago === formaPago &&
          ventas[i].cliente === cliente &&
          ventas[i].fechaVenta === fechaVenta &&
          ventas[i].vendedor === vendedor
        ) {
          ventaEncontrada = ventas[i];
          break;
        }
      }

      if (ventaEncontrada) {
        document.getElementById("sala").value = ventaEncontrada.sala;
        document.getElementById("horario").value = ventaEncontrada.horario;
        document.getElementById("numerotiquetes").value = ventaEncontrada.numeroTiquetes;
        document.getElementById("posiciones").value = ventaEncontrada.posiciones;
        document.getElementById("formapago").value = ventaEncontrada.formaPago;
        document.getElementById("cliente").value = ventaEncontrada.cliente;
        document.getElementById("fechaventa").value = ventaEncontrada.fechaVenta;
        document.getElementById("vendedor").value = ventaEncontrada.vendedor;
      } else {
        alert("Venta no encontrada.");
      }
    }

    function modificarVenta() {
      var sala = document.getElementById("sala").value;
      var horario = document.getElementById("horario").value;
      var numeroTiquetes = document.getElementById("numerotiquetes").value;
      var posiciones = document.getElementById("posiciones").value;
      var formaPago = document.getElementById("formapago").value;
      var cliente = document.getElementById("cliente").value;
      var fechaVenta = document.getElementById("fechaventa").value;
      var vendedor = document.getElementById("vendedor").value;

      var ventaEncontrada = null;
      for (var i = 0; i < ventas.length; i++) {
        if (
          ventas[i].sala === sala &&
          ventas[i].horario === horario &&
          ventas[i].numeroTiquetes === numeroTiquetes &&
          ventas[i].posiciones === posiciones &&
          ventas[i].formaPago === formaPago &&
          ventas[i].cliente === cliente &&
          ventas[i].fechaVenta === fechaVenta &&
          ventas[i].vendedor === vendedor
        ) {
          ventaEncontrada = ventas[i];
          break;
        }
      }

      if (ventaEncontrada) {
        ventaEncontrada.sala = document.getElementById("sala").value;
        ventaEncontrada.horario = document.getElementById("horario").value;
        ventaEncontrada.numeroTiquetes = document.getElementById("numerotiquetes").value;
        ventaEncontrada.posiciones = document.getElementById("posiciones").value;
        ventaEncontrada.formaPago = document.getElementById("formapago").value;
        ventaEncontrada.cliente = document.getElementById("cliente").value;
        ventaEncontrada.fechaVenta = document.getElementById("fechaventa").value;
        ventaEncontrada.vendedor = document.getElementById("vendedor").value;
        console.log(ventas);
        limpiarCampos();
      } else {
        alert("Venta no encontrada.");
      }
    }

    function eliminarVenta() {
      var sala = document.getElementById("sala").value;
      var horario = document.getElementById("horario").value;
      var numeroTiquetes = document.getElementById("numerotiquetes").value;
      var posiciones = document.getElementById("posiciones").value;
      var formaPago = document.getElementById("formapago").value;
      var cliente = document.getElementById("cliente").value;
      var fechaVenta = document.getElementById("fechaventa").value;
      var vendedor = document.getElementById("vendedor").value;

      var index = -1;
      for (var i = 0; i < ventas.length; i++) {
        if (
          ventas[i].sala === sala &&
          ventas[i].horario === horario &&
          ventas[i].numeroTiquetes === numeroTiquetes &&
          ventas[i].posiciones === posiciones &&
          ventas[i].formaPago === formaPago &&
          ventas[i].cliente === cliente &&
          ventas[i].fechaVenta === fechaVenta &&
          ventas[i].vendedor === vendedor
        ) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        ventas.splice(index, 1);
        console.log(ventas);
        limpiarCampos();
      } else {
        alert("Venta no encontrada.");
      }
    }

    function limpiarCampos() {
      document.getElementById("sala").value = "";
      document.getElementById("horario").value = "";
      document.getElementById("numerotiquetes").value = "";
      document.getElementById("posiciones").value = "";
      document.getElementById("formapago").value = "";
      document.getElementById("cliente").value = "";
      document.getElementById("fechaventa").value = "";
      document.getElementById("vendedor").value = "";
    }