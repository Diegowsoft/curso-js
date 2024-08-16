function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0  || fim.value.lenght == 0 || passo.value.length == 0){
        window.alert('[ERRO]Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
    }
}



















/* Minha tentativa

var inicio = 1
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var res = document.getElementById('res')

function contar(){
    while(inicio>=fim){
        inicio++
    }
}*/