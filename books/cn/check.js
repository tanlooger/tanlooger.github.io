

var fs = require('fs')
const path = require('path');

let files = [];
let oldname = 0;
const getFilesRecursively = (pathname) => {
  if (fs.statSync(pathname).isFile()) {
    const filename = path.basename(pathname)
    if(filename.split('.').pop()=='mdx'){
      const newname = filename.split('.').shift()
      if(newname != oldname+1){
        console.log('.............'+pathname +'  '+newname+'  '+oldname)
      }
      oldname = newname

      files.push(pathname);
    }
    return;
  }
  if(fs.statSync(pathname).isDirectory()){
    oldname = 0
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
// files.map(f=>{
//     console.log(f)
// })

