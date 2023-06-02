const fs = require('fs');


let bookdata = fs.readFileSync('../70/a.txt', 'utf8')

let reg = /　/g
// \n\n\n\n\n\n.+(?<![。？\.\-])\n
reg = /\n((第.部分.*)|(第[一二三四五六七八九十〇]{1,3}章.*)|([0-9]{1,2})|([一二三四五六七八九十]、.*))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*)|(\n\n\n\n\n.+(?<![。？\.\-])))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n((第.篇 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n((第.部分 .*)|(第[0-9]{1,2}章 .*)|([0-9]{1,2}))\n/g
reg = /\n(([上中下]编 .*)|(第.部分 .*)|(第[一二三四五六七八九十]{1,3}章 .*))\n/g
reg = /\n(([上中下]册 .*)|(第[一二三四五六七八九十]{1,3}[章节] .*))\n/g
reg = /\n(.{3,50})\n/g
reg = /\n((资本论- 第.部)|[IVXL]{1,5}[、．].*|[0-9]{1,5}、.*|(第[一二三四五六七八九十]{1,3}章.*))\n/g
reg = /\n(第.册|第.卷|第.部|[一二三四五六七八九十]{1,3}|尾声|关于《战争与和平》一书的几句话)\n/g



const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　　'+v.trim()))


