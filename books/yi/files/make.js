const fs = require('fs');


const bookdata = fs.readFileSync('a/3.txt', 'utf8')

const reg1 = /(\n第.部分.*\n)/
const chap1 = bookdata.split(reg1)
console.log(chap1.length)


