var peliculas = [];

    function guardarPelicula() {
      var codigo = document.getElementById("codigo").value;
      var nombreOriginal = document.getElementById("nombreOriginal").value;
      var nombreAsignado = document.getElementById("nombreAsignado").value;
      var genero = document.getElementById("genero").value;
      var idiomaOriginal = document.getElementById("idiomaOriginal").value;
      var idiomasDisponibles = document.getElementById("idiomasDisponibles").value;
      var subtitulosDisponibles = document.getElementById("subtitulosDisponibles").value;
      var duracion = document.getElementById("duracion").value;
      var actoresPrincipales = document.getElementById("actoresPrincipales").value;
      var actoresSecundarios = document.getElementById("actoresSecundarios").value;
      var numAfiches = document.getElementById("numAfiches").value;
      var numCopias = document.getElementById("numCopias").value;
      var productora = document.getElementById("productora").value;

      if (
        codigo === "" ||
        nombreOriginal === "" ||
        nombreAsignado === "" ||
        genero === "" ||
        idiomaOriginal === "" ||
        idiomasDisponibles === "" ||
        subtitulosDisponibles === "" ||
        duracion === "" ||
        actoresPrincipales === "" ||
        actoresSecundarios === "" ||
        numAfiches === "" ||
        numCopias === "" ||
        productora === ""
      ) {
        alert("Todos los campos son requeridos.");
        return;
      }

      var pelicula = {
        codigo: codigo,
        nombreOriginal: nombreOriginal,
        nombreAsignado: nombreAsignado,
        genero: genero,
        idiomaOriginal: idiomaOriginal,
        idiomasDisponibles: idiomasDisponibles,
        subtitulosDisponibles: subtitulosDisponibles,
        duracion: duracion,
        actoresPrincipales: actoresPrincipales,
        actoresSecundarios: actoresSecundarios,
        numAfiches: numAfiches,
        numCopias: numCopias,
        productora: productora
      };

      peliculas.push(pelicula);
      console.log(peliculas);
      limpiarCampos();
    }

    function buscarPelicula() {
      var codigo = document.getElementById("codigo").value;

      var peliculaEncontrada = null;
      for (var i = 0; i < peliculas.length; i++) {
        if (peliculas[i].codigo === codigo) {
          peliculaEncontrada = peliculas[i];
          break;
        }
      }

      if (peliculaEncontrada) {
        document.getElementById("codigo").value = peliculaEncontrada.codigo;
        document.getElementById("nombreOriginal").value = peliculaEncontrada.nombreOriginal;
        document.getElementById("nombreAsignado").value = peliculaEncontrada.nombreAsignado;
        document.getElementById("genero").value = peliculaEncontrada.genero;
        document.getElementById("idiomaOriginal").value = peliculaEncontrada.idiomaOriginal;
        document.getElementById("idiomasDisponibles").value = peliculaEncontrada.idiomasDisponibles;
        document.getElementById("subtitulosDisponibles").value = peliculaEncontrada.subtitulosDisponibles;
        document.getElementById("duracion").value = peliculaEncontrada.duracion;
        document.getElementById("actoresPrincipales").value = peliculaEncontrada.actoresPrincipales;
        document.getElementById("actoresSecundarios").value = peliculaEncontrada.actoresSecundarios;
        document.getElementById("numAfiches").value = peliculaEncontrada.numAfiches;
        document.getElementById("numCopias").value = peliculaEncontrada.numCopias;
        document.getElementById("productora").value = peliculaEncontrada.productora;
      } else {
        alert("Película no encontrada.");
      }
    }

    function modificarPelicula() {
      var codigo = document.getElementById("codigo").value;

      var peliculaEncontrada = null;
      for (var i = 0; i < peliculas.length; i++) {
        if (peliculas[i].codigo === codigo) {
          peliculaEncontrada = peliculas[i];
          break;
        }
      }

      if (peliculaEncontrada) {
        peliculaEncontrada.codigo = document.getElementById("codigo").value;
        peliculaEncontrada.nombreOriginal = document.getElementById("nombreOriginal").value;
        peliculaEncontrada.nombreAsignado = document.getElementById("nombreAsignado").value;
        peliculaEncontrada.genero = document.getElementById("genero").value;
        peliculaEncontrada.idiomaOriginal = document.getElementById("idiomaOriginal").value;
        peliculaEncontrada.idiomasDisponibles = document.getElementById("idiomasDisponibles").value;
        peliculaEncontrada.subtitulosDisponibles = document.getElementById("subtitulosDisponibles").value;
        peliculaEncontrada.duracion = document.getElementById("duracion").value;
        peliculaEncontrada.actoresPrincipales = document.getElementById("actoresPrincipales").value;
        peliculaEncontrada.actoresSecundarios = document.getElementById("actoresSecundarios").value;
        peliculaEncontrada.numAfiches = document.getElementById("numAfiches").value;
        peliculaEncontrada.numCopias = document.getElementById("numCopias").value;
        peliculaEncontrada.productora = document.getElementById("productora").value;
        console.log(peliculas);
        limpiarCampos();
      } else {
        alert("Película no encontrada.");
      }
    }

    function eliminarPelicula() {
      var codigo = document.getElementById("codigo").value;

      var index = -1;
      for (var i = 0; i < peliculas.length; i++) {
        if (peliculas[i].codigo === codigo) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        peliculas.splice(index, 1);
        console.log(peliculas);
        limpiarCampos();
      } else {
        alert("Película no encontrada.");
      }
    }

    function limpiarCampos() {
      document.getElementById("codigo").value = "";
      document.getElementById("nombreOriginal").value = "";
      document.getElementById("nombreAsignado").value = "";
      document.getElementById("genero").value = "";
      document.getElementById("idiomaOriginal").value = "";
      document.getElementById("idiomasDisponibles").value = "";
      document.getElementById("subtitulosDisponibles").value = "";
      document.getElementById("duracion").value = "";
      document.getElementById("actoresPrincipales").value = "";
      document.getElementById("actoresSecundarios").value = "";
      document.getElementById("numAfiches").value = "";
      document.getElementById("numCopias").value = "";
      document.getElementById("productora").value = "";
    }