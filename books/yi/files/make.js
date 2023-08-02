
 const fs = require('fs');


for(let i=171; i<=200; i++){
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");
}

