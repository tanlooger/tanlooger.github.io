const fs = require('fs');


let bookdata = fs.readFileSync('a/3.txt', 'utf8')

const reg = /\n((第.部分.*)|(第[一二三四五六七八九十]{1,3}章.*))\n/g
const chaps = bookdata.match(reg)

chaps.map(v=>console.log(v.trim()))


