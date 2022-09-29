
let suma = 0;
$('#btn').on('click', () => {

for (let i = 1; i <= 200; i++) {

suma += i

    
}
$('#Respuesta').append(suma + ' ');

})