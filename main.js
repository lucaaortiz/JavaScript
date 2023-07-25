function guardarEnStorage(clave, objeto) {
  let array = obtenerDelStorage(clave);
  
  if (!Array.isArray(array)) {
    array = [];
  }
  
  array.push(objeto);
  const objetoJSON = JSON.stringify(array);
  localStorage.setItem(clave, objetoJSON);
}

function obtenerDelStorage(clave) {
  const objetoJSON = localStorage.getItem(clave);
  
  if (objetoJSON) {
    return JSON.parse(objetoJSON);
  } else {
    return null;
  }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const turno = document.getElementById("turno").value;
  const comentario = document.getElementById("comentario").value;

  const cliente = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    fecha: fecha,
    turno: turno,
    comentario: comentario
  };

  guardarEnStorage("clientes", cliente);

  alert("¡Formulario enviado con éxito!");
});

const clientesGuardados = obtenerDelStorage("clientes");
if (clientesGuardados) {
  clientesGuardados.forEach(cliente => {
    console.log(cliente.nombre, cliente.email, cliente.telefono, cliente.fecha, cliente.turno, cliente.comentario);
  });
}


