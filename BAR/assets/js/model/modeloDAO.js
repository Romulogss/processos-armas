let MODELOS;
const buscarModelos = (nome, processo) => {
    let modelos = ''
    MODELOS.forEach(modelo => {
        if (modelo.modelo.toUpperCase().includes(nome.toUpperCase())) {
            modelos += `
            <li class="list-group-item" onclick="preencherInformacoesModelos(${processo},'${(modelo._id)}')">${modelo.modelo}</li>
            `
        }
    })
    return modelos
}

const existeModelo = modelo => {
    let result = false;
    MODELOS.forEach(m => {
        if (m.modelo.toUpperCase() === modelo.toUpperCase()) result = true
    })
    return result
}

const getModelos = () => {
    const query = `
    query {
        modelos {
            _id
            modelo
            calibre
            capacidade
            canos
            comprimentoCano
            raias
            acabamento
            funcionamento
            especie
        }
    }
    `
    return Graphql.exec(query);
}

const createModelo = novaArma => {
    const query = `
    mutation (
        $modelo: String!,
        $calibre: String!,
        $capacidade: Int!,
        $canos: Int!,
        $comprimentoCano: Int!
        $raias: Int!,
        $acabamento: String!,
        $funcionamento: Int!,
        $especie: Int!
        ) {
            createModelo(data: {
                modelo: $modelo
                calibre: $calibre
                capacidade: $capacidade
                canos: $canos
                comprimentoCano: $comprimentoCano
                raias: $raias
                acabamento: $acabamento
                funcionamento: $funcionamento
                especie: $especie
            }) {
                calibre
                modelo
            }
        }
    `
    Graphql.exec(query, novaArma)
        .then(() => popularModelos())
        .catch(erro => console.log(erro))
}

const popularModelos = () => {getModelos().then(({ data: { modelos } }) => MODELOS = modelos)}
