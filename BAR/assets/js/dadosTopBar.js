const numBar = () => {
    document.getElementById('num-bar-header').innerHTML = document.getElementById('num-bar').value
}

const salvarDados = () => {
    const inicio = document.getElementById('inicio').value
    const fim = document.getElementById('fim').value
    const mes = document.getElementById('mes').value
    const numBar = document.getElementById('num-bar').value
    const diaPub = document.getElementById('dia-pub').value
    const mesPub = document.getElementById('mes-pub').value
    const BAR = {
        inicio,
        fim,
        mes,
        numBar,
        diaPub,
        mesPub
    }
    localStorage.setItem('dadosBAR', JSON.stringify(BAR))
}

const carregarDados = () => {
    bar = localStorage.dadosBAR;
    if (bar) {
        bar = JSON.parse(bar)
        document.getElementById('inicio').value = bar.inicio
        document.getElementById('fim').value = bar.fim
        document.getElementById('mes').value = bar.mes
        document.getElementById('num-bar').value = bar.numBar
        document.getElementById('dia-pub').value = bar.diaPub
        document.getElementById('mes-pub').value = bar.mesPub
    }
}