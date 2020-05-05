const Graphql = {
    endpoint: 'http://localhost:4000/',
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
