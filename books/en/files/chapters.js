const fs = require('fs');


let bookdata = fs.readFileSync('../40/a.txt', 'utf8')

let reg = /　/g
// \n\n\n\n\n\n.+(?<![。？\.\-])\n
reg = /\n((PART (ONE|TWO|THREE))|(ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN)|(第[一二三四五六七八九十]{1,3}章 .*)|(I|II|III|IV|V|VI|VII))|((BOOK (ONE|TWO|THREE)))|(Chapter [0-9]{1,2})\n/g
reg = /\n((BOOK (ONE|TWO|THREE)))|(Chapter [0-9]{1,2})\n/g

const chaps = bookdata.match(reg)

chaps.map(v=>console.log(v.trim()))


