const Graphql = {
    endpoint: 'https://glacial-lowlands-37327.herokuapp.com/',
    exec: (query, variaveis) => {
        return fetch(Graphql.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables: variaveis })
        })
            .then(resposta => resposta.json())
            .catch(err => { console.log(err) })
    }
}
