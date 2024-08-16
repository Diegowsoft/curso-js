function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); // Corrigido para incluir parênteses
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    // Corrigido `fano.value.length` e conversão para número
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
        return; // Adicionado retorno para interromper a execução em caso de erro
    }
    
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if (fsex[0].checked) { // Homens
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/bebe-m.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-m.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/homem-adulto.jpg');
        } else {
            img.setAttribute('src', 'imagens/homem-idoso.jpg');
        }
    } else if (fsex[1].checked) { // Mulheres
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/bebe-f.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-f.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/mulher-adulta.jpg');
        } else {
            img.setAttribute('src', 'imagens/mulher-idosa.jpg');
        }
    }
    
    // Atualiza a exibição do resultado
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
    res.appendChild(img); // Adiciona a imagem ao resultado
}
