$('#btn').on('click', () => {

let nuno = Number($('#uno').val());
let ndos = Number($('#dos').val());


if (nuno > ndos) {
    $('#Respuesta').html('El primer' + nuno + ' digito es mayor que el segundo'+ ndos)
}
if (ndos > nuno) {
    $('#Respuesta').html('El segundo' + ndos + ' digito es mayor que el primero'+ nuno)
}
if (nuno === ndos) {
    $('#Respuesta').html('Los dos son iguales')
}

})