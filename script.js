let output = "#";
for (i = 0; i < 6; i++) {
  output = output + "#";
  console.log(output);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("par");
  } else {
    console.log("imppar");
  }
}

for (let i = 0; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}

alert("Hola");
let nombre = prompt("ingresa tu nombre");
let cantidadCaracteres = nombre.length;
if (cantidadCaracteres < 3) {
  console.log(" Debe ingresar un minimo de tres caracteres");
} else {
}
let contraseña = prompt(" ingrese contraseña");
alert("ud. ingreso ok");

confirm("QUiere iniciar sesion?");
let user = prompt("Ingrese usuario");
let pass = prompt("ingrese contraseña");
if (user !== nombre || pass !== constraseña) {
  console.log(" Su usuario o contraseña son incorrectos");
} else {
  "Bienvenido " + nombre;
}
