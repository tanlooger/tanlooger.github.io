var fs = require('fs')
const path = require('path');

let files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
      const absolute = path.join(directory, file);
      if (fs.statSync(absolute).isDirectory()) {
          getFilesRecursively(absolute);
      } else {
          if(path.basename(absolute) == '0.mdx'){
              files.push(absolute);
          }
          
      }
    
  }
};

getFilesRecursively('./')

files.map(f=>{
  console.log(f)
  const newpath = f.replace('/0.mdx', '.mdx')
  console.log(newpath)

  fs.rename(f, newpath, (err)=>{
    if(err)console.log(err)
  })
  
})
