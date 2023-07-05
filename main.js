// Función para guardar un objeto en el almacenamiento local
function guardarEnStorage(clave, objeto) {
    const objetoJSON = JSON.stringify(objeto);
    localStorage.setItem(clave, objetoJSON);
  }
  
  // Función para obtener un objeto del almacenamiento local
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
    const comentario = document.getElementById("comentario").value;
  
    const cliente = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      comentario: comentario
    };
  
    // Guardar el objeto cliente en el almacenamiento local
    guardarEnStorage("cliente", cliente);
  
    alert("¡Formulario enviado con éxito!");
  
    // No resetear el formulario para mantener los datos ingresados
  });
  
  // Obtener el objeto cliente del almacenamiento local
  const clienteGuardado = obtenerDelStorage("cliente");
  if (clienteGuardado) {
    // Restaurar los valores en el formulario
    document.getElementById("nombre").value = clienteGuardado.nombre;
    document.getElementById("email").value = clienteGuardado.email;
    document.getElementById("telefono").value = clienteGuardado.telefono;
    document.getElementById("comentario").value = clienteGuardado.comentario;
  }
  