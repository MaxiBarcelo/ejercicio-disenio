/**$(() => { 
$("#Mostrar").on('click', () => {

let nuno = Number($("#uno").val());
let ndos = Number($("#dos").val());

return nuno * ndos


})


})
**/


$("#btn").on('click', () => {

    let nuno = Number($("#uno").val());
    let ndos = Number($("#dos").val());

    let mult = nuno * ndos;

    $('#Respuesta').html('El resultado es :' + mult)
})