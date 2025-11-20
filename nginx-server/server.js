const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 404;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);
  

  const extName = String(path.extname(filePath)).toLowerCase();

  const mimiTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascritp",
    ".png": "text/png",
  };

  const contentType = mimiTypes[extName] || 'application/octet-stream';

  fs.readFile(filePath,(err,content)=>{
    if(err){
      if(err === 'ENOENT'){
        res.writeHead(404,{"Content-Type":'text/html'});
        res.end("404: Directory/File not found Bosssssss....");
      }
    }else{
      res.writeHead(200,{'Content-Type': contentType});
      res.end(content,'utf-8');
    }
  })
});

server.listen(port, () => {
  console.log("Server is live on port ", port);
});
