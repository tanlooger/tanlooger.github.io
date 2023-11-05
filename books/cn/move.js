var fs = require('fs')
const path = require('path');

const filename = './31/5.mdx'

const replacefile= (filename)=>{
    fs.readFile(filename, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/\n	*/g, '\n');
        var result = data.replace(/\n[	　]*/g, '\n');
        var result = data.replace(/^\n+(.*)\n/g, '---\n---\n---\ntitle: $1\n---\n');

      
        fs.writeFile(filename, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
}

let files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
      const absolute = path.join(directory, file);
      if (fs.statSync(absolute).isDirectory()) {
          getFilesRecursively(absolute);
      } else {
          if(file.substring(file.lastIndexOf('.')+1) == 'mdx'){
              files.push(absolute);
          }
          
      }
    
  }
};

getFilesRecursively('../44')

files.map(f=>{
  //const newpath = f.substring(0, f.lastIndexOf('/'))+'.mdx'
  //const newpath = f.substring(f.lastIndexOf('/'))+'.mdx'
  const filename = f.substring(f.lastIndexOf('/')+1, f.lastIndexOf('.'))
  const num = Number(filename)
  if(num < 75 )return
  const filename2 = String(num-1)
  const newpath = f.substring(0, f.lastIndexOf('/')+1)+filename2+'.mdx'
  console.log(newpath)

  // console.log(f)
  // console.log(newpath)
  fs.rename(f, newpath, (err)=>{
    if(err)console.log(err)
  })
  
})
