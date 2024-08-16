function carregar(){
    var msg     = window.document.getElementById('msg')
    var img     = window.document.getElementById('imagem')
    var data    = new Date()
    var hora    = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora sao ${hora}:${minutos}:${segundos}.`

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Atualiza a mensagem de acordo com a hora do dia
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}:${minutos}:${segundos}.`;
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#E49DA6'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${minutos}:${segundos}.`;
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#A47760'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}:${minutos}:${segundos}.`;
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#022042'
    }
}