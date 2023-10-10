let datos = [
  {
    "Nombre": "John",
    "Apellido": "Doe",
    "Edad": "25",
    "Genero": "Male",
    "email": "john.doe@example.com"
  },
  {
    "Nombre": "Jane",
    "Apellido": "Smith",
    "Edad": "30",
    "Genero": "Female",
    "email": "jane.smith@example.com"
  },
  {
    "Nombre": "Michael",
    "Apellido": "Johnson",
    "Edad": "35",
    "Genero": "Male",
    "email": "michael.johnson@example.com"
  },
  {
    "Nombre": "Emily",
    "Apellido": "Brown",
    "Edad": "28",
    "Genero": "Female",
    "email": "emily.brown@example.com"
  },
  {
    "Nombre": "James",
    "Apellido": "Davis",
    "Edad": "32",
    "Genero": "Male",
    "email": "james.davis@example.com"
  }
]

let tabla = document.getElementById("tablaDinamica");
let titulos = document.createElement("tr");

let thNombre = document.createElement("th");
thNombre.innerHTML = "Nombre";
titulos.appendChild(thNombre);

let thApellido = document.createElement("th");
thApellido.innerHTML = "Apellido";
titulos.appendChild(thApellido);

let thEdad = document.createElement("th");
thEdad.innerHTML = "Edad";
titulos.appendChild(thEdad);

let thGenero = document.createElement("th");
thGenero.innerHTML = "Genero";
titulos.appendChild(thGenero);

let thEmail = document.createElement("th");
thEmail.innerHTML = "E-mail";
titulos.appendChild(thEmail);

tabla.appendChild(titulos);


for (let i = 0; i < datos.length; i++) {
  //console.log(datos[i]);
  let fila = document.createElement("tr")
  let persona = datos[i];

  let nombre = document.createElement("td");
  let apellido = document.createElement("td");
  let edad = document.createElement("td");
  let genero = document.createElement("td");
  let email = document.createElement("td");

  nombre.innerHTML = persona.Nombre
  apellido.innerHTML = persona.Apellido
  edad.innerHTML = persona.Edad
  genero.innerHTML = persona.Genero
  email.innerHTML = persona.email

  fila.appendChild(nombre);
  fila.appendChild(apellido);
  fila.appendChild(edad);
  fila.appendChild(genero);
  fila.appendChild(email);

  tabla.appendChild(fila);

}





// fila.appendChild(nombre);
// fila.appendChild(apellido);
// fila.appendChild(edad);
// fila.appendChild(genero);
// fila.appendChild(email);

tablaAux.appendChild(fila);


