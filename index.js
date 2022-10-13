const http = require('http');

const data = {
    FName:'Manvendra',
    LName:'Chauhan',
    Age:26,

}

const server = http.createServer((req,res)=>{
    res.write('<h1>Welcome</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(9000);

server.on('connection',(socket)=>{
    console.log('Hello World!');
})
