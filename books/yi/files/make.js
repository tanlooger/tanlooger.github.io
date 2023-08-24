
 const fs = require('fs');


for(let i=201; i<=230; i++){
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");
}

