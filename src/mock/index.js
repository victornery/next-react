const express = require('express') //   Importando Express
const app = express() //    Criando instância do Express
const port = 8000 //    Setando porta para servir sv express

/*
**  Criando server HTTP
*/

app.listen(port, () => {
    console.log(`Mock API rodando em http://localhost:${port}/api/`)
})

/*
**  Resolvendo requisições para os endpoints indicados
*/

app.get('/api/gifts/', (req, res) => {
    res.sendFile(`${__dirname}/api/gift.json`)
})

/*
**  Aqui, podemos substituir os endpoints somente para o express
**  servir arquivos estáticos. Fica aí um ponto legal para se
**  pensar. 🧐
**
**  app.use(express.static(__dirname))
*/