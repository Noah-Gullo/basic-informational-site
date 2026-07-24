const http = require('node:http');
const fs = require('node:fs');

async function main(){
    const server = http.createServer((req, res) => {
        let page='';

        switch(req.url){
            case "/":
                page="routes/index.html";
                break;
            case "/about":
                page="routes/about.html";
                break;
            case "/contact-me":
                page="routes/contact-me.html";
                break;
            default:
                page="routes/404.html";
                break;
        }

        fs.readFile(page, 'utf8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    });

    server.listen(8000);
}

main();