const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]
const hoje = new Date()
let dia = ("0" + hoje.getDate()).slice(-2)
const mes = ("0" + (hoje.getMonth() + 1)).slice(-2)
const mesNome = meses[hoje.getMonth()]
const ano = hoje.getFullYear()

const replicarDadosPorte = () => {
    const dadosPM = document.getElementById('dados-PM').value
    const tipo = document.getElementById('tipo').value
    const marca = document.getElementById('marca').value
    const calibre = document.getElementById('calibre').value
    const modelo = document.getElementById('modelo').value
    const serie = document.getElementById('serie').value
    const sigma = document.getElementById('sigma').value

    document.getElementById('dados-PM-cel').value = dadosPM
    document.getElementById('tipo-cel').value = tipo
    document.getElementById('marca-cel').value = marca
    document.getElementById('calibre-cel').value = calibre
    document.getElementById('modelo-cel').value = modelo
    document.getElementById('serie-cel').value = serie
    document.getElementById('sigma-cel').value = sigma
}

const getDadosAssinatura = () => {
    const nome = document.getElementById('nome').value
    const rg = document.getElementById('rg').value
    const graduacao = document.getElementById('graduacao').value
    document.getElementById('assinatura').innerHTML = `${graduacao} - ${rg} - ${nome}`
}

const digitador = () => {
    const nomeDigitador = document.getElementById('nome-digitador').value
    let digitador = [...document.getElementsByName('digitador')]
    digitador.forEach(d => d.innerHTML = nomeDigitador)
}

const tipoTransf = () => {
    const tipo = document.getElementById('tipo-t').value
    document.getElementById('tipo-transf').innerHTML = tipo;

}

const tipoTransfInt = () => {
    let tipo = document.getElementById('tipo-int').value;
    tipo = tipo.split('/')
    document.getElementById('tipo-transf').innerHTML = tipo[0]

}