function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    // Atualiza a mensagem
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    // Atualiza a imagem e a mensagem com base na hora
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/manha.jpg';
        msg.innerHTML += ' Bom dia!';
        document.body.style.backgroundColor = '#FCC8BA'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'imagens/tarde.jpg';
        msg.innerHTML += ' Boa tarde!';
        document.body.style.backgroundColor = '#DF985A'
    } else {
        // Boa noite
        img.src = 'imagens/noite.jpg';
        msg.innerHTML += ' Boa noite!';
        document.body.style.backgroundColor = '#2375CF'
    }
}
