
 const fs = require('fs');


for(let i=101; i<=150; i++){
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");
}

