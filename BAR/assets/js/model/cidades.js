const CIDADES = [
    { id: '119278', nome: 'Ipixuna do Pará' },
    { id: '119291', nome: 'Jacareacanga' },
    { id: '119299', nome: 'Jacundá' },
    { id: '119339', nome: 'Melgaço' },
    { id: '119277', nome: 'Piçarra' },
    { id: '5185', nome: 'Ponta de Pedras' },
    { id: '5191', nome: 'Prainha' },
    { id: '5208', nome: 'Santa Luzia do Pará' },
    { id: '119323', nome: 'Santa Maria das Barreiras' },
    { id: '5214', nome: 'Santana do Araguaia' },
    { id: '119325', nome: 'São João da Ponta' },
    { id: '5237', nome: 'São Miguel do Guama' },
    { id: '5250', nome: 'Soure' },
    { id: '235', nome: 'Fordlândia' },
    { id: '119351', nome: 'Eldorado do Carajas' },
    { id: '119287', nome: 'Aurora do Pará' },
    { id: '119353', nome: 'Bannach' },
    { id: '119327', nome: 'Bom Jesus do Tocantins' },
    { id: '5026', nome: 'Brasil Novo' },
    { id: '119352', nome: 'Cachoeira do Piriá' },
    { id: '4975', nome: 'Acara' },
    { id: '119355', nome: 'Bagre' },
    { id: '5015', nome: 'Benevides' },
    { id: '5016', nome: 'Benfica' },
    { id: '81', nome: 'Breves' },
    { id: '29', nome: 'Brejo de Areia' },
    { id: '121753', nome: 'Florianópolis' },
    { id: '601', nome: 'Abaetetuba' },
    { id: '119332', nome: 'Água Azul do Norte' },
    { id: '4987', nome: 'Americano' },
    { id: '5014', nome: 'Belterra' },
    { id: '119288', nome: 'Breu Branco' },
    { id: '121501', nome: 'Vila Rondon' },
    { id: '121576', nome: 'Santa Helena' },
    { id: '1507755', nome: 'Sapucaia' },
    { id: '1508308', nome: 'Viseu' },
    { id: '65', nome: 'Baía da Traíção' },
    { id: '22222222', nome: 'BAÍA DE MARAJÓ' },
    { id: '123027', nome: 'Castanhal' },
    { id: '121532', nome: 'Vila Rondón do Pará' },
    { id: '121534', nome: 'Distrito de Icoaraci' },
    { id: '1502855', nome: 'Curuá' },
    { id: '1502954', nome: 'Eldorado dos Carajás' },
    { id: '5084', nome: 'Mojuí dos Campos' },
    { id: '39330033', nome: 'Bonito' },
    { id: '4980', nome: 'Alenquer' },
    { id: '4988', nome: 'Anajas' },
    { id: '119284', nome: 'Anapu' },
    { id: '76', nome: 'Bragança' },
    { id: '119276', nome: 'Brejo Grande do Araguaia' },
    { id: '5033', nome: 'Cachoeira do Arari' },
    { id: '119289', nome: 'Canaã dos Carajás' },
    { id: '5127', nome: 'Medicilandia' },
    { id: '5152', nome: 'Nova Ipixuna' },
    { id: '5174', nome: 'Peixe-Boi' },
    { id: '119350', nome: 'Quatipuru' },
    { id: '5218', nome: 'São Caetano de Odivelas' },
    { id: '5239', nome: 'São Pedro' },
    { id: '119308', nome: 'Terra Santa' },
    { id: '5041', nome: 'Capanema' },
    { id: '14', nome: 'Altamira' },
    { id: '5001', nome: 'Augusto Correa' },
    { id: '5005', nome: 'Baiao' },
    { id: '5207', nome: 'Santa Isabel do Pará' },
    { id: '5052', nome: 'Colares' },
    { id: '5073', nome: 'Faro' },
    { id: '5090', nome: 'Igarapé-Miri' },
    { id: '119297', nome: 'Mãe do Rio' },
    { id: '5166', nome: 'Pacaja' },
    { id: '119345', nome: "Pau D'Arco" },
    { id: '119300', nome: 'Rio Maria' },
    { id: '5225', nome: 'São Geraldo do Araguaia' },
    { id: '119324', nome: 'São João de Pirabas' },
    { id: '119314', nome: 'Tucumã' },
    { id: '5285', nome: 'Vitoria do Xingu' },
    { id: '5219', nome: 'Itaituba' },
    { id: '5110', nome: 'Juruti' },
    { id: '5131', nome: 'Mirasselvas' },
    { id: '678', nome: 'Óbidos' },
    { id: '5163', nome: 'Ourém' },
    { id: '119282', nome: 'Ourilândia do Norte' },
    { id: '119344', nome: 'Placas' },
    { id: '5203', nome: 'Salinopolis' },
    { id: '5224', nome: 'São Francisco do Pará' },
    { id: '5229', nome: 'São João do Araguaia' },
    { id: '119309', nome: 'Terra Alta' },
    { id: '5271', nome: 'Vigia' },
    { id: '5282', nome: 'Vizeu' },
    { id: '4976', nome: 'Afua' },
    { id: '18', nome: 'Ananindeua' },
    { id: '5010', nome: 'Barreiras' },
    { id: '100178', nome: 'Belém' },
    { id: '4982', nome: 'Almeirim' },
    { id: '474', nome: 'Altér do Chão' },
    { id: '4998', nome: 'Arumanduba' },
    { id: '5003', nome: 'Aveiro' },
    { id: '5007', nome: 'Barcarena' },
    { id: '5011', nome: 'Baturite' },
    { id: '5260', nome: 'Tomé-Açú' },
    { id: '122082', nome: 'Remansão(Tucuruí)' },
    { id: '122083', nome: 'São Domingos do Araguaia' },
    { id: '122084', nome: 'Gurupizinho(Paragominas)' },
    { id: '122085', nome: 'Guajará-Miri(Acará)' },
    { id: '122086', nome: 'Santarém Novo' },
    { id: '122087', nome: 'Nova Timboteua' },
    { id: '122088', nome: 'Piriá(Curralinho)' },
    { id: '5054', nome: 'Conceição do Araguaia' },
    { id: '119329', nome: 'Cumaru do Norte' },
    { id: '119280', nome: 'Dom Eliseu' },
    { id: '5094', nome: 'Irituia' },
    { id: '5097', nome: 'Itupiranga' },
    { id: '5120', nome: 'Maracanã' },
    { id: '5133', nome: 'Mocajuba' },
    { id: '5154', nome: 'Nova Mocajuba' },
    { id: '5160', nome: 'Oriximiná' },
    { id: '5192', nome: 'Primavera' },
    { id: '5204', nome: 'Salvaterra' },
    { id: '119303', nome: 'Santa Barbara do Para' },
    { id: '5211', nome: 'Santa Maria do Pará' },
    { id: '5215', nome: 'Santarém' },
    { id: '5245', nome: 'São Sebastião da Boa Vista' },
    { id: '5248', nome: 'Senador José Porfirio' },
    { id: '5251', nome: 'Tailandia' },
    { id: '5259', nome: 'Timboteua' },
    { id: '5261', nome: 'Tracuateua' },
    { id: '119311', nome: 'Ulianópolis' },
    { id: '5266', nome: 'Uruara' },
    { id: '4974', nome: 'Abel Figueiredo' },
    { id: '5031', nome: 'Bujaru' },
    { id: '5089', nome: 'Igarapé-Açú' },
    { id: '119336', nome: 'Curionópolis' },
    { id: '119279', nome: 'Goianesia do Pará' },
    { id: '5083', nome: 'Gurupá' },
    { id: '119292', nome: 'Inhangapi' },
    { id: '5122', nome: 'Marapanim' },
    { id: '5123', nome: 'Marituba' },
    { id: '5137', nome: 'Monte Alegre' },
    { id: '5139', nome: 'Monte Dourado' },
    { id: '119341', nome: 'Oeiras do Pará' },
    { id: '119348', nome: 'Palestina do Para' },
    { id: '5171', nome: 'Parauapebas' },
    { id: '119315', nome: 'São Felix do Xingu' },
    { id: '5264', nome: 'Tucurui' },
    { id: '5286', nome: 'Xinguara' },
    { id: '5195', nome: 'Redenção' },
    { id: '5169', nome: 'Paragominas' },
    { id: '5042', nome: 'Capitão Poço' },
    { id: '119295', nome: 'Floresta do Araguaia' },
    { id: '119294', nome: 'Garrafão do Norte' },
    { id: '119338', nome: 'Nova Esperança do Piria' },
    { id: '5182', nome: 'Piraquara' },
    { id: '5187', nome: 'Portel' },
    { id: '5188', nome: 'Porto de Moz' },
    { id: '5202', nome: 'Ruropolis' },
    { id: '5220', nome: 'São Domingos do Capim' },
    { id: '99', nome: 'Cametá' },
    { id: '5051', nome: 'Chaves' },
    { id: '119275', nome: 'Concórdia do Pará' },
    { id: '5063', nome: 'Curralinho' },
    { id: '119334', nome: 'Curuai' },
    { id: '5066', nome: 'Curuçá' },
    { id: '5115', nome: 'Limoeiro do Ajuru' },
    { id: '5117', nome: 'Magalhaes Barata' },
    { id: '312', nome: 'Marabá' },
    { id: '5135', nome: 'Moju' },
    { id: '5142', nome: 'Muana' },
    { id: '119343', nome: 'Novo Progresso' },
    { id: '119342', nome: 'Novo Repartimento' },
    { id: '5201', nome: 'Rondon do Pará' },
    { id: '5206', nome: 'Santa Cruz do Arari' },
    { id: '5217', nome: 'Santo Antônio do Tauá' }
]
const procurarCidade = nome => {
    return CIDADES.find(cidade => cidade.nome === nome)
}
const popularCidades = processo => {
    let select = document.getElementById('cidade-' + processo)
    CIDADES.sort((a, b) => {
        if (a.nome > b.nome) return 1;
        if (a.nome < b.nome) return -1;
        return 0;
    })
    CIDADES.forEach(cidade => {
        let option = document.createElement('option')
        option.setAttribute('value', cidade.id);
        option.textContent = cidade.nome
        select.appendChild(option);
    })
}

const buscarCEP = cep => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(url, {
        method: 'GET'
    })
        .then(resposta => resposta.json())
        .catch(err => console.log(err))
}

const completarEnd = async processo => {
    if (document.getElementById(`residencia-${processo}`).value.trim() !== '') {
        const numero = document.getElementById(`numero-${processo}`).value.trim()
        const cep = document.getElementById(`cep-${processo}`).value.trim()
        const endereco_cep = await buscarCEP(cep.replace(/\D/g, '')).then(({ logradouro, localidade, cep, bairro }) => { return { localidade, cep, logradouro, bairro } })
        const cidade = procurarCidade(endereco_cep.localidade)
        document.getElementById(`cidade-${processo}`).value = cidade.id
        let endereco_final = `${endereco_cep.logradouro}, ${numero}, ${endereco_cep.bairro}, ${endereco_cep.cep}, ${endereco_cep.localidade}`
        document.getElementById(`residencia-${processo}`).value = endereco_final
        document.getElementById('dados-endereco').remove()
    } else {
        document.getElementById('dados-endereco').remove()
    }
}