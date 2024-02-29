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

    
    textoCrip.textContent = "";
    campoTexto.value = "";
    mostrarMensagens(); 
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