const http = require('http')
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    let nome = req.url.match(/nome=([^&]*)/) || ''
    if (!!nome){
        nome = nome[1]
    }

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
            res.end(saudacao.replace("{}", nome))
            break
        case '/curriculo':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
            res.end(curriculo)
            break
            case '/blog':
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
                res.end(posts)
                break
        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'})
            res.end('Not Found')
            break
    }
})

const posts = `
    <main>
        <article>
            <h2>Os perigos do uso de python</h2>
            <p>Python é a porta de entrada para outras drogas mais fortes como pandas ou django.</p>
        </article>
        <article>
            <h2>Os perigos do uso de java</h2>
            <p>Java é a porta de entrada para outras drogas mais fortes como JPA ou swing.</p>
        </article>
        <article>
            <h2>Os perigos do uso de C</h2>
            <p>C é a porta de entrada para outras drogas mais fortes como C++ ou malloc.</p>
        </article>
    </main>
`

const saudacao = `Bem vindo ao meu site {}`

const curriculo = `
    <ul>
        <li>Estágio IFPB</li>
        <li>Sysadmin Configr</li>
        <li>Professor particular de programação</li>
        <li>Desenvolvedor Fullstack na Translucent</li>
    </ul>
`


server.listen(port, () => console.log(`Servidor começou na porta ${port}`))