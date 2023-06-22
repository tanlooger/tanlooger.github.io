const fs = require('fs');


let bookdata = fs.readFileSync('../56/a.txt', 'utf8')

let reg = /　/g
// \n\n\n\n\n\n.+(?<![。？\.\-])\n
reg = /\n((PART (ONE|TWO|THREE))|(ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN)|(第[一二三四五六七八九十]{1,3}章 .*)|(I|II|III|IV|V|VI|VII))|((BOOK (ONE|TWO|THREE)))|(Chapter [0-9]{1,2})\n/g
reg = /\n((BOOK (ONE|TWO|THREE)))|(Chapter [0-9]{1,2})\n/g
reg = /\n(Chapter [0-9]) - .*\n/g
reg = /\nTHE .* DAY：.*\n/g
reg = /\n((Book (One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven)))|([0-9]{1,3})\n/g
reg = /\n((BOOK (ONE|TWO|THREE) .*)|([0-9]{1,2})|APPENDIXES)\n/g
reg = /\n([0-9]{1,2} .*)\n/g
reg = /\n([a-z\-]{3,30})\n/g



const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　'+v.trim()))


