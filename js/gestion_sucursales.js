var sucursales = [];

function cargarDepartamentos() {
  var departamentoSelect = document.getElementById("departamento");

  var departamentos = [
    "Amazonas",
    "Antioquia",
    "Arauca",
    "Atlántico",
    "Bogotá, D.C.",
    "Bolívar",
    "Boyacá",
    "Caldas",
    "Caquetá",
    "Casanare",
    "Cauca",
    "Cesar",
    "Chocó",
    "Córdoba",
    "Cundinamarca",
    "Guainía",
    "Guaviare",
    "Huila",
    "La Guajira",
    "Magdalena",
    "Meta",
    "Nariño",
    "Norte de Santander",
    "Putumayo",
    "Quindío",
    "Risaralda",
    "San Andrés y Providencia",
    "Santander",
    "Sucre",
    "Tolima",
    "Valle del Cauca",
    "Vaupés",
    "Vichada"
  ];

  for (var i = 0; i < departamentos.length; i++) {
    var option = document.createElement("option");
    option.value = departamentos[i];
    option.text = departamentos[i];
    departamentoSelect.appendChild(option);
  }
}

function cargarCiudades(departamentoSelect) {
  var ciudadSelect = document.getElementById("ciudad");
  var selectedDepartamento = departamentoSelect.value;

  var ciudadesPorDepartamento = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Envigado", "Itagüí"],
    "Arauca": ["Arauca", "Saravena", "Tame"],
    "Atlántico": ["Barranquilla", "Malambo", "Soledad"],
    "Bogotá, D.C. (Distrito Capital)": ["Bogotá"],
    "Bolívar": ["Cartagena de Indias", "Turbaco"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso"],
    "Caldas": ["Manizales", "La Dorada", "Chinchiná"],
    "Caquetá": ["Florencia", "San Vicente del Caguán"],
    "Casanare": ["Yopal", "Aguazul", "Tauramena"],
    "Cauca": ["Popayán", "Santander de Quilichao"],
    "Cesar": ["Valledupar", "Aguachica", "Agustín Codazzi"],
    "Chocó": ["Quibdó", "Buenaventura"],
    "Córdoba": ["Montería", "Cereté", "Lorica"],
    "Cundinamarca": ["Girardot", "Soacha", "Chía"],
    "Guainía": ["Inírida"],
    "Guaviare": ["San José del Guaviare"],
    "Huila": ["Neiva", "Pitalito", "Garzón"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia"],
    "Magdalena": ["Santa Marta", "Ciénaga", "Fundación"],
    "Meta": ["Villavicencio", "Acacías", "Granada"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona"],
    "Putumayo": ["Mocoa", "Puerto Asís", "Orito"],
    "Quindío": ["Armenia", "Calarcá", "Quimbaya"],
    "Risaralda": ["Pereira", "Dosquebradas", "La Virginia"],
    "San Andrés y Providencia": ["San Andrés"],
    "Santander": ["Bucaramanga", "Floridablanca", "Girón"],
    "Sucre": ["Sincelejo", "Corozal", "Sincé"],
    "Tolima": ["Ibagué", "Espinal", "Melgar"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira"],
    "Vaupés": ["Mitú"],
    "Vichada": ["Puerto Carreño"]
  };

  ciudadSelect.innerHTML = "";
  var ciudades = ciudadesPorDepartamento[selectedDepartamento];

  for (var i = 0; i < ciudades.length; i++) {
    var option = document.createElement("option");
    option.value = ciudades[i];
    option.text = ciudades[i];
    ciudadSelect.appendChild(option);
  }
}

function guardarSucursal() {
  var codigo = document.getElementById("codigo").value;
  var direccion = document.getElementById("direccion").value;
  var departamento = document.getElementById("departamento").value;
  var ciudad = document.getElementById("ciudad").value;
  var gerente = document.getElementById("gerente").value;
  var numSalas = document.getElementById("numSalas").value;
  var numTrabajadores = document.getElementById("numTrabajadores").value;
  var cafeteria = document.getElementById("cafeteria").checked;

  var sucursal = {
    codigo: codigo,
    direccion: direccion,
    departamento: departamento,
    ciudad: ciudad,
    gerente: gerente,
    numSalas: numSalas,
    numTrabajadores: numTrabajadores,
    cafeteria: cafeteria
  };

  sucursales.push(sucursal);

  console.log("Sucursal guardada correctamente");
  console.log(sucursales);

  // Limpiar campos
  document.getElementById("codigo").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("departamento").value = "";
  document.getElementById("ciudad").innerHTML = "";
  document.getElementById("gerente").value = "";
  document.getElementById("numSalas").value = "";
  document.getElementById("numTrabajadores").value = "";
  document.getElementById("cafeteria").checked = false;
}

function buscarSucursal() {
  var codigo = document.getElementById("codigo").value;

  for (var i = 0; i < sucursales.length; i++) {
    if (sucursales[i].codigo === codigo) {
      console.log("Sucursal encontrada:");
      console.log(sucursales[i]);
      return;
    }
  }

  console.log("No se encontró la sucursal con el código especificado");
}

function modificarSucursal() {
  var codigo = document.getElementById("codigo").value;

  for (var i = 0; i < sucursales.length; i++) {
    if (sucursales[i].codigo === codigo) {
      var direccion = document.getElementById("direccion").value;
      var departamento = document.getElementById("departamento").value;
      var ciudad = document.getElementById("ciudad").value;
      var gerente = document.getElementById("gerente").value;
      var numSalas = document.getElementById("numSalas").value;
      var numTrabajadores = document.getElementById("numTrabajadores").value;
      var cafeteria = document.getElementById("cafeteria").checked;

      sucursales[i].direccion = direccion;
      sucursales[i].departamento = departamento;
      sucursales[i].ciudad = ciudad;
      sucursales[i].gerente = gerente;
      sucursales[i].numSalas = numSalas;
      sucursales[i].numTrabajadores = numTrabajadores;
      sucursales[i].cafeteria = cafeteria;

      console.log("Sucursal modificada correctamente");
      console.log(sucursales[i]);
      return;
    }
  }

  console.log("No se encontró la sucursal con el código especificado");
}

function eliminarSucursal() {
  var codigo = document.getElementById("codigo").value;

  for (var i = 0; i < sucursales.length; i++) {
    if (sucursales[i].codigo === codigo) {
      sucursales.splice(i, 1);
      console.log("Sucursal eliminada correctamente");
      console.log(sucursales);
      return;
    }
  }

  console.log("No se encontró la sucursal con el código especificado");
}

function limpiarCampos() {
  document.getElementById("codigo").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("departamento").value = "";
  document.getElementById("ciudad").innerHTML = "";
  document.getElementById("gerente").value = "";
  document.getElementById("numSalas").value = "";
  document.getElementById("numTrabajadores").value = "";
  document.getElementById("cafeteria").checked = false;
}

cargarDepartamentos();