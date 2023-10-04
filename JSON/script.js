let aDatos = [
  {
    "Nombre": "John",
    "Apellido": "Doe",
    "Edad": "25",
    "Genero": "Male",
    "e-mail": "john.doe@example.com",
  },
  {
    "Nombre": "Jane",
    "Apellido": "Smith",
    "Edad": "30",
    "Genero": "Female",
    "e-mail": "jane.smith@example.com",
  },
  {
    "Nombre": "Michael",
    "Apellido": "Johnson",
    "Edad": "35",
    "Genero": "Male",
    "e-mail": "michael.johnson@example.com",
  },
  {
    "Nombre": "Emily",
    "Apellido": "Brown",
    "Edad": "28",
    "Genero": "Female",
    "e-mail": "emily.brown@example.com",
  },
  {
    "Nombre": "James",
    "Apellido": "Davis",
    "Edad": "32",
    "Genero": "Male",
    "e-mail": "james.davis@example.com",
  }
];

console.log("La variable es de tipo: ",typeof(aDatos));
console.log(aDatos);
let aux = JSON.stringify(aDatos);
console.log(aux);
let aDatos2 = JSON.parse(aux);
console.log(aDatos2);



// divPpal = document.getElementById("principal");
// divPpal.innerHTML = "";

// divPpal.appendChild(aDatosString);
