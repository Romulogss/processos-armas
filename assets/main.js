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
let dia = hoje.getDate()
const mes = hoje.getMonth()
const mesNome = meses[mes]
let mesNum = hoje.getMonth() + 1
if (mesNum < 10) {
    mesNum = '0' + mesNum
}
const ano = hoje.getFullYear()
if (dia < 10) {
    dia = '0' + dia
}

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
    document.getElementById('digitador-1').innerHTML = nomeDigitador
    document.getElementById('digitador-2').innerHTML = nomeDigitador
}

const tipoTransf = () => {
    const tipo = document.getElementById('tipo-t').value
    console.log(tipo)
    document.getElementById('tipo-transf').innerHTML = tipo;
    
}

const tipoTransfInt = () => {
    let tipo = document.getElementById('tipo-int').value;
    tipo = tipo.split('/')
    document.getElementById('tipo-transf').innerHTML = tipo[0]
    
}