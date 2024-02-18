function mostrarMensagens() {
    var campoTexto = document.querySelector(".campo__texto");
    var textoCrip = document.querySelector(".texto__crip");
    var mensagemInicial = document.querySelector(".mensagem__inicial");
    var submensagemInicial = document.querySelector(".submensagem__inicial");

    if (campoTexto.value === "" && textoCrip.textContent === "") {
        mensagemInicial.style.display = "block";
        submensagemInicial.style.display = "block";
    } else {
        mensagemInicial.style.display = "none";
        submensagemInicial.style.display = "none";
    }
}

function mostrarBotaoCopiar() {
    var textoCrip = document.querySelector(".texto__crip").textContent;
    var botaoCopiar = document.querySelector(".botao__copiar");
    if (textoCrip.trim() !== "") {
        botaoCopiar.style.display = "block";
    } else {
        botaoCopiar.style.display = "none";
    }
}

function criptografar() {
    var campoTexto = document.querySelector(".campo__texto");
    var textoCrip = document.querySelector(".texto__crip");
    var textoOriginal = campoTexto.value.toLowerCase();
    var textoCriptografado = textoOriginal
        .replace(/e/g, 'enter') 
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    textoCrip.textContent = textoCriptografado;
    mostrarMensagens(); // Mostrar mensagem inicial e submensagem
    mostrarBotaoCopiar(); // Mostrar botão de copiar, se necessário
}

function descriptografar() {
    var campoTexto = document.querySelector(".campo__texto");
    var textoCrip = document.querySelector(".texto__crip");
    var textoCriptografado = campoTexto.value.toLowerCase();
    var textoOriginal = textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    textoCrip.textContent = textoOriginal;
    mostrarMensagens(); // Mostrar mensagem inicial e submensagem
    mostrarBotaoCopiar(); // Mostrar botão de copiar, se necessário
}

function copiarTexto() {
    var textoCrip = document.querySelector(".texto__crip");
    var texto = textoCrip.textContent;

    var textareaTemp = document.createElement("textarea");
    textareaTemp.value = texto;
    document.body.appendChild(textareaTemp);

    textareaTemp.select();
    document.execCommand("copy");

    document.body.removeChild(textareaTemp);

    alert("Texto copiado para a área de transferência!");
}

function limparCampo() {
    var campoTexto = document.querySelector(".campo__texto");
    var textoCrip = document.querySelector(".texto__crip");
    var mensagemInicial = document.querySelector(".mensagem__inicial");
    var submensagemInicial = document.querySelector(".submensagem__inicial");

    
    textoCrip.textContent = ""; // Limpa o conteúdo do campo de criptografia
    campoTexto.value = ""; // Limpa o conteúdo do campo de texto
    mostrarMensagens(); // Reexibe as mensagens inicial e submensagem
}

function mostrarBotaoCopiar() {
    var textoCrip = document.querySelector(".texto__crip").textContent;
    var botaoCopiar = document.querySelector(".botao__copiar");
    if (textoCrip.trim() !== "") {
        botaoCopiar.style.display = "block";
    } else {
        botaoCopiar.style.display = "none";
    }
}
// function ajustarPosicaoBotoes() {
//     var campoCrip = document.querySelector(".campo__crip");
//     var botaoCopiar = document.querySelector(".botao__copiar");
//     var botaoLimpar = document.querySelector(".botao__limpar");

//     var alturaTexto = campoCrip.offsetHeight; // Altura do texto criptografado/descriptografado
//     var distanciaTopo = campoCrip.getBoundingClientRect().top; // Distância do topo da página até o campo

//     // Ajuste a posição vertical dos botões
//     botaoCopiar.style.top = (distanciaTopo + alturaTexto + 20) + "px"; // Adicionando um espaço de 20 pixels abaixo do texto
//     botaoLimpar.style.top = (distanciaTopo + alturaTexto + 20) + "px"; // Adicionando um espaço de 20 pixels abaixo do texto
// }

// // Adicione esta função às suas funções criptografar() e descriptografar() após ajustar o texto
// ajustarPosicaoBotoes();


