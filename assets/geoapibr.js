const popularCidades = () => {
    //let cidade = document.querySelector('#cidade');
    //let cidades = cidade.childNodes;

    //[...cidades].map(node => node.remove());

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/15/distritos')
        .then(res => res.json())
        .then(cidades => {
            cidades.sort((a, b) => {
                return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
            })
            console.log(cidades)
        });
}