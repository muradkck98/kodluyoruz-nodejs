const http = require('http')

const server = http.createServer((req,res)=>{
    
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>index sayfası hoşgeldiniz<h1>');
    }

    else if (url === '/hakkimda') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>hakkimda  sayfasi hoşgeldiniz<h1>');
    }

    else if (url === '/iletisim') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>iletisim sayfasi hoşgeldiniz<h1>');
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1> 404 sayfa bulunamadı')
    }

    res.end()
});


const port = 5000;

server.listen(5000, () => {
    console.log(`sunucu port ${port} de başlatldı`);
});

