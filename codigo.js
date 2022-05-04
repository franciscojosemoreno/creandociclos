let numero = prompt("Completa la operación matemática: 11 X 5 =");
while (numero == "") {
  numero = prompt("Por favor ingrese un número");
}
let intentosRestantes;
for (let i = 1; i <= 5; i++) {
  if (numero == "55") {
    alert("Correcto!");
    break;
  }
  intentosRestantes = 5 - i;
  alert("Incorrecto, te quedan " + intentosRestantes + " intentos");
  if (i == 5) {
    break;
  }
  numero = prompt("Completa la operación matemática: 11 X 5 =");
}
