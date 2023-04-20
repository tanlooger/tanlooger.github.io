const fs = require('fs');


let bookdata = fs.readFileSync('a/3.txt', 'utf8')

const reg1 = /\n第.部分.*\n/g
const splitter1 = '哈------这是第一条分界线------哈'
bookdata = bookdata.replace(reg1, splitter1+'$1')
const reg2 = /\n第[一二三四五六七八九十]{1,3}章.*\n/g
const splitter2 = '嘿======这是第二条分界线======嘿'
bookdata = bookdata.replace(reg2, splitter2+'$1')
const chap1 = bookdata.split(splitter1)
console.log(chap1.length)


