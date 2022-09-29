let numeros = []
let suma = 0

$('#btn').on('click', () => {
  if(numeros.length <= 300) {
    numeros.push(Number($('#num1').val()));
    suma += (Number($('#num1').val()));
    $('#resultado').html(`El resultado de la suma es: ${suma}`)
  }
})