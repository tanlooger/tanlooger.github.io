
const fs = require('fs');


for (let i = 1; i <= 70; i++) {
  let data = fs.readFileSync('../49/' + i + '.mdx', 'utf8');
  console.log(data.match(/title: .*/g)[0].replace('title: ', '　'))
  data = data.replace(/---\n---\n---\ntitle: (.*)\n---/, '\n\n$1')

  fs.appendFileSync("a.txt", data, (err) => {

    if (err) {
      console.log(err);
    }
    else {
      // Get the file contents after the append operation
      console.log('\nFile Contents of file after append')
    }
  });
}

