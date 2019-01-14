const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Mock API rodando em http://localhost:${port}/api/`)
})

app.get('/api/', (req, res) => {
    res.send(`Oi, você deve estar procurando algo como os Mocks criados aqui. `);
})

app.use(express.static(__dirname))