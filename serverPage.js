var http = require('http')
var url = require('url')
var fs = require('fs')

// função para ler um arquivo e escrevê-lo na response
function readFile(response,file){
    fs.readFile(file, function(err, html){
        response.write(html)
        response.end()
    })
}

var callback = function  ( request, response ) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    var parts = url.parse(request.url)
    var path = parts.path
    //verificar rota dentro da callback
    if (path == '/'){
        readFile(response, 'index.html')    
    }
}

var servidor = http.createServer(callback)
servidor.listen(8080, console.log('Servidor está nor ar!'))