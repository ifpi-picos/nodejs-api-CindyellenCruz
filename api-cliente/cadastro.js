// Capturar o evento de click no botão
const btn = document.querySelector('button');
btn.onclick = function(){
    pegarValoresDoForm();
}

// Pegar os valores que estão preenchidos nos campos
function pegarValoresDoForm (){
    const titulo = document.querySelector('#titulo').value;
    const texto = document.querySelector('#texto').value;
    const autor = document.querySelector('#autor').value;
    const postagem = {titulo, texto: texto, autor: autor};
    enviarParaAPI(postagem);
}

// Enviar esses valores no formato do objeto para o API

function enviarDadosParaAPI () {

async function enviarDadosParaAPI (postagem) {
    const resposta = await fetch('http://localhost:3000/postagens', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
        },
        body: JSON.stringify(posategm)
    });
    if (resposta.status === 200) {
        alert('Salvo com sucesso');
        const [divMsg] = document.getElementsByClassName('msg');
        divMsg.getElementsByClassName.backgroundColor = '#00e600';
        divMsg.innerHTML = '<p>adicionado com sucesso</p>'
    }
}
}