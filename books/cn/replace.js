

var fs = require('fs')
const path = require('path');

const filename = './31/5.mdx'

const replacefile= (filename)=>{
    fs.readFile(filename, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        //var result = data.replace(/\n	*/g, '\n');
        // var result = data.replace(/\n[	　]*/g, '\n');
        // var result = data.replace(/^\n+(.*)\n/g, '---\n---\n---\ntitle: $1\n---\n');
        var result
        //result = data.replace(/^---\ntitle: /g, '---\n---\n---\ntitle: ');
        //result = data.replace(/^\n+(.*)\n/g, '---\n---\n---\ntitle: $1\n---\n');

        result = data.replace(/^\n+(.*)\n+◎(.*)\n/g, '---\n---\n---\ntitle: $1 $2\n---\n\n')

        console.log(RegExp.$1)
        //remove whitespace of the beginning
        //result = data.replace(/\n[^\S\r\n]+/g, '\n')
        //Sort lines and remove adjacent duplicates
        // ^(.*)(?:(?:\r?\n|\r)\1)+$
        // blank line
        // ^(?:[\t ]*(?:\r?\n|\r))+
        // [一二三四五六七八九十]
        // [上中下]$
      
        fs.writeFile(filename, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
}

let files = [];
const getFilesRecursively = (pathname) => {
  if (fs.statSync(pathname).isFile()) {
    if(pathname.split('.').pop()=='mdx'){
      files.push(pathname);
    }
    return;
  }
  if(fs.statSync(pathname).isDirectory()){
    const filesInDirectory = fs.readdirSync(pathname);
    for (const file of filesInDirectory) {
          const absolute = path.join(pathname, file);
          getFilesRecursively(absolute);
    }
  }
};

//for(var i=11; i<32; i++ )getFilesRecursively('./'+i)
//getFilesRecursively('./')
getFilesRecursively('./')
files.map(f=>{
    replacefile(f)

    console.log(f)
})

