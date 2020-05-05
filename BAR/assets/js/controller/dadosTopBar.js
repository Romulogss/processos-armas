const numBar = () => {
    document.getElementById('num-bar-header').innerHTML = document.getElementById('num-bar').value
}

const salvarDados = () => {
    const BAR = {
        inicio: document.getElementById('inicio').value,
        fim: document.getElementById('fim').value,
        mes: document.getElementById('mes').value,
        numBar: document.getElementById('num-bar').value,
        diaPub: document.getElementById('dia-pub').value,
        mesPub: document.getElementById('mes-pub').value
    }
    localStorage.setItem('dadosBAR', JSON.stringify(BAR))
}

const carregarDados = () => {
    let bar = localStorage.dadosBAR;
    if (bar) {
        bar = JSON.parse(bar)
        document.getElementById('inicio').value = bar.inicio
        document.getElementById('fim').value = bar.fim
        document.getElementById('mes').value = bar.mes
        document.getElementById('num-bar').value = bar.numBar
        document.getElementById('dia-pub').value = bar.diaPub
        document.getElementById('mes-pub').value = bar.mesPub
        numBar()
    }
}