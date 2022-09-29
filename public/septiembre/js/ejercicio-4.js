$('#btn').on('click', () => {

let nuno = Number($('#uno').val());
let ndos = Number($('#dos').val());
let ntres = Number($('#tres').val());

let promedio = nuno + ndos + ntres;

let resultado = promedio / 3;

console.log(resultado);

if (resultado > 7) {
    $('#Respuesta').html('El promedio es mayor a 7')
    
} else if (resultado > 4 && resultado < 7) {
    $('#Respuesta').html('El promedio esta entre 7 y 4')
    
}else if (resultado < 4) {
    $('#Respuesta').html('El promedio es menor a 4')
}


})