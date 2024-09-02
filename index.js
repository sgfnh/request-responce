const http=require('http')
const ser=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>first page</title><head>');
    res.write('<body><h1>hello from my node.js</h1></body>');
    res.write('</html>')
    res.end()
})
ser.listen(5000)
