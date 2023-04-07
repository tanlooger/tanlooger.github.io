var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
  console.log('request starting...'+request.url);

  var filePath = '.' + request.url;
  if (filePath == './')
      filePath = './index.html';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
      case '.mdx':
          contentType = 'text/plain';
          break;
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.css':
          contentType = 'text/css';
          break;
      case '.json':
          contentType = 'application/json';
          break;
      case '.png':
          contentType = 'image/png';
          break;      
      case '.jpg':
          contentType = 'image/jpg';
          break;
      case '.wav':
          contentType = 'audio/wav';
          break;
      case '.mp4':
          contentType = 'video/mp4';
          break;
  }

  fs.readFile(filePath, function(error, content) {
      if (error) {
          if(error.code == 'ENOENT'){
              fs.readFile('./404.html', function(error, content) {
                  response.writeHead(200, { 'Content-Type': contentType });
                  //response.setHeader('Content-Type', contentType)
                  response.end(content, 'utf-8');
              });
          }
          else {
              response.writeHead(500);
              response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
              response.end(); 
          }
      }
      else {
          response.writeHead(200, { 'Content-Type': contentType });
          //response.setHeader('Content-Type', contentType)
          var c = content.toString()
          response.end(c.replace(/^---\n---\n/g, ''), 'utf-8');
      }
  });

}).listen(4000);
console.log('Server running at http://127.0.0.1:4000/');
