 console.log('Hola Mundo!')

 let res

 const num1 = 10
 const num2 = 20

 res = num1 + num2

 alert(res)

 const mes = parseInt(prompt('Ingrese un numero de mes: '))

 console.log(resultado)

 if (resultado === 100){
   alert('El numero es 100')
 } else if(resultado === 50){
   alert('No es 100')
 } else if (resultado === 25){
   alert('No es 100')
 }

 switch (mes) {
 case 1:
     alert('Enero')
     break;

   case 2:
     alert('Febrero')
     break;

   case 3:
     alert('Marzo')
     break;

   case 4:
     alert('Abril')
     break;

   case 5:
     alert('Mayo')
     break;

  case 6:
     alert('Junio')
     break;

   default:
     alert('Ingresa un mes valido')
     break;
 }

 const num1 = 11
 const num2 = 21

 if(num1 === 10 || num2 === 20){
   alert('El resultado es true')
 } else {
   alert('El resultado es false')
 }  6) Encontrar el mayor de 2 numeros  const num1 = parseInt(prompt('Ingrese un numero: ')  const num2 = parseInt(prompt('Ingrese otro numero: '))
  if (num1 > num2) {    document.write(num1)  } else {    document.write(num2) }

  7) Encontrar el mayor de 3 numeros

  const num1 = parseInt(prompt('Ingrese un numero: '))
  const num2 = parseInt(prompt('Ingrese otro numero: '))
  const num3 = parseInt(prompt('Ingrese otro numero: '))

  if (num1 > num2 && num1 > num3) {
    document.write(num1 + 'num1')
 } else if (num2 > num3) {
   document.write(num2 + 'num2')
 } else {
   document.write(num3 + 'num3')
 }

 8) Verificar si un numero es divisible por 2

 const num1 = parseInt(prompt('Ingrese un numero: '))
 const resultado = num1 % 2

 if (resultado === 0) {
   alert('El numero es divisible en 2')
 } else {
   alert('El numero no es divisible en 2')
 }

 9) Encontrar las vocales de una frase
