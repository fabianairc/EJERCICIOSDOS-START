// let output = "#";
// for (i = 0; i < 6; i++) {
//   output = output + "#";
//   console.log(output);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("par");
//   } else {
//     console.log("imppar");
//   }
// }

// for (let i = 0; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// alert("Hola");
// let nombre = prompt("ingresa tu nombre");
// let cantidadCaracteres = nombre.length;
// if (cantidadCaracteres < 3) {
//   console.log(" Debe ingresar un minimo de tres caracteres");
// } else {
// }
// let contraseña = prompt(" ingrese contraseña");
// alert("ud. ingreso ok");

// confirm("QUiere iniciar sesion?");
// let user = prompt("Ingrese usuario");
// let pass = prompt("ingrese contraseña");
// if (user !== nombre || pass !== constraseña) {
//   console.log(" Su usuario o contraseña son incorrectos");
// } else {
//   "Bienvenido " + nombre;
// }

// function first() {
//   let a = prompt("ingresa un numero");s
//   let b = 0;
//   if (a > 0) {
//     console.log("Es mayor a ceor");
//   } else if (a < 0) {
//     ("Es menor a 0");
//   } else {
//     console.log("Es igual a 0");
//   }
//   return;
// }
// first();

// const findNumberType = (number) => {
//   let message = "";
//   const parsedNumber = +number;

//   if (!parsedNumber && parsedNumber !== 0) {
//     message = "No es un numero";
//     return message;
//   }
//   if (parsedNumber === 0) {
//     return (message = "Es igual a 0");
//   } else if (parsedNumber > 0) {
//     return (message = "Es mayor a 0");
//   } else message = "Es menor que 0";
//   return message;
// };

// let chosenNumber = prompt("ingresa un numero");
// let response = findNumberType(chosenNumber);

// alert(response);
const chosenNumber = prompt("Ingresa un Número");
let parsedNumber = +chosenNumber;

let message = "";

const myFunc2 = (number) => {
  if (!parsedNumber) {
    message = "No es un numero";
    return message;
  }
  if (parsedNumber === 1) {
    message = "No es primo}";
    return message;
  }
  if (parsedNumber === 2) {
    message = "es primo";
    return message;
  }
  if (parsedNumber === 0) {
    message = "No es primo";
    return message;
  }

  for (let i = 2; i < parsedNumber; i++) {
    if (parsedNumber % i === 0) {
      message = "No es primo";
      return message;
    }
  }
  message = "es primo";
  return message;
};
const result = myFunc2(parsedNumber);
alert(result);
