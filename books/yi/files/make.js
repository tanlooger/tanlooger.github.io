
 const fs = require('fs');


for(let i=151; i<=170; i++){
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");
}

