let miarray = []
let suma = 0;

$('#btn').on('click', () => {


if (miarray.length <= 15) {
    
miarray.push(Number($('#number').val()));
suma += (Number($('#number').val()));

$('#Respuesta').html(`La suma de los numeros es: ${suma}`)

}


})