const chaves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

const criptografar = (texto) => {
    return texto.split('').map(letra => chaves[letra] || letra).join('');
};

const descriptografar = (texto) => {
    let textoDescriptografado = texto;
    for (const [letra, chave] of Object.entries(chaves)) {
        textoDescriptografado = textoDescriptografado.replaceAll(chave, letra);
    }
    return textoDescriptografado;
};

const atualizarResultado = (texto) => {
    const saida = document.querySelector(".output");
    saida.innerHTML = `<p class="saida">${texto}</p>
                       <button type="button" class="copiar" onclick="copiarTexto()">Copiar</button>`;
};

const getText = () => {
    const textoEntrada = document.querySelector(".entrada").value;
    const textoCriptografado = criptografar(textoEntrada);
    atualizarResultado(textoCriptografado);
};

const getDescripto = () => {
    const textoEntrada = document.querySelector(".entrada").value;
    const textoDescriptografado = descriptografar(textoEntrada);
    atualizarResultado(textoDescriptografado);
};

const copiarTexto = () => {
    const textoParaCopiar = document.querySelector(".saida").textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto:', err);
        alert('Erro ao copiar texto. Por favor, copie manualmente.');
    });
};