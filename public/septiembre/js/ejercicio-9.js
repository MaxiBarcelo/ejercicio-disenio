let miarray=[]



$('#btn').on('click', () => {
let mayor = Math.max(...miarray)
let menor = Math.min(...miarray)
let negativos = 0;
let num = Number($('#number').val());
miarray.push(num);

    if (miarray.length > 15) {
        
        miarray.pop(num);

        }

for (let i = 0; i < miarray.length; i++) {
    
if (miarray[i] < 0) {
    negativos ++;
}


}
$('#Respuesta').append(mayor + ' ');
$('#Respuesta').append(menor + ' ');
$('#Respuesta').append(negativos + ' ');

})