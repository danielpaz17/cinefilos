var productoras = [];

    function guardarProductora() {
      var codigo = document.getElementById("codigo").value;
      var nombre = document.getElementById("nombre").value;
      var pais = document.getElementById("pais").value;
      var telefonos = document.getElementById("telefonos").value;
      var celulares = document.getElementById("celulares").value;
      var correo = document.getElementById("correo").value;
      var representante = document.getElementById("representante").value;

      if (codigo === "" || nombre === "" || pais === "" || telefonos === "" || celulares === "" || correo === "" || representante === "") {
        alert("Todos los campos son requeridos.");
        return;
      }

      var productora = {
        codigo: codigo,
        nombre: nombre,
        pais: pais,
        telefonos: telefonos,
        celulares: celulares,
        correo: correo,
        representante: representante
      };

      productoras.push(productora);
      console.log(productoras);
      limpiarCampos();
    }

    function buscarProductora() {
      var codigo = document.getElementById("codigo").value;

      var productoraEncontrada = null;
      for (var i = 0; i < productoras.length; i++) {
        if (productoras[i].codigo === codigo) {
          productoraEncontrada = productoras[i];
          break;
        }
      }

      if (productoraEncontrada) {
        document.getElementById("codigo").value = productoraEncontrada.codigo;
        document.getElementById("nombre").value = productoraEncontrada.nombre;
        document.getElementById("pais").value = productoraEncontrada.pais;
        document.getElementById("telefonos").value = productoraEncontrada.telefonos;
        document.getElementById("celulares").value = productoraEncontrada.celulares;
        document.getElementById("correo").value = productoraEncontrada.correo;
        document.getElementById("representante").value = productoraEncontrada.representante;
      } else {
        alert("Productora no encontrada.");
      }
    }

    function modificarProductora() {
      var codigo = document.getElementById("codigo").value;

      var productoraEncontrada = null;
      for (var i = 0; i < productoras.length; i++) {
        if (productoras[i].codigo === codigo) {
          productoraEncontrada = productoras[i];
          break;
        }
      }

      if (productoraEncontrada) {
        productoraEncontrada.codigo = document.getElementById("codigo").value;
        productoraEncontrada.nombre = document.getElementById("nombre").value;
        productoraEncontrada.pais = document.getElementById("pais").value;
        productoraEncontrada.telefonos = document.getElementById("telefonos").value;
        productoraEncontrada.celulares = document.getElementById("celulares").value;
        productoraEncontrada.correo = document.getElementById("correo").value;
        productoraEncontrada.representante = document.getElementById("representante").value;
        console.log(productoras);
        limpiarCampos();
      } else {
        alert("Productora no encontrada.");
      }
    }

    function eliminarProductora() {
      var codigo = document.getElementById("codigo").value;

      var index = -1;
      for (var i = 0; i < productoras.length; i++) {
        if (productoras[i].codigo === codigo) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        productoras.splice(index, 1);
        console.log(productoras);
        limpiarCampos();
      } else {
        alert("Productora no encontrada.");
      }
    }

    function limpiarCampos() {
      document.getElementById("codigo").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("pais").value = "";
      document.getElementById("telefonos").value = "";
      document.getElementById("celulares").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("representante").value = "";
    }