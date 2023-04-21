const fs = require('fs');


let bookdata = fs.readFileSync('../33/a.txt', 'utf8')

let reg = /　/g
reg = /\n((第.部分.*)|(第[0-9]{1,2}章 .*)|([0-9]{1,2}))\n/g
reg = /\n((第.部分.*)|(第[一二三四五六七八九十]{1,3}章.*)|([0-9]{1,2}))\n/g
const chaps = bookdata.match(reg)

chaps.map(v=>console.log(v.trim()))


