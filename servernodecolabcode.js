const http = require('http')

const server = http.createServer((req, res) => {
    const resp =[]
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>Contato</h1>'
    
    res.end(resp[req.url])
})
server.listen(3001, 'localhost', () => {
   console.log('Servidor de pé em:http://localhost:3001')
   console.log('Pra desligar o servidor: ctrl + c')
})
   