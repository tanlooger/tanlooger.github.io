const fs = require('fs');

const bookid = process.argv[2];
let bookdata = fs.readFileSync('../'+bookid+'/a.txt', 'utf8')

let reg = /　/g
// \n\n\n\n\n\n.+(?<![。？\.\-])\n
reg = /\n((第.部分.*)|(第[一二三四五六七八九十]{1,3}章.*)|([0-9]{1,2})|([一二三四五六七八九十]、.*))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*)|(\n\n\n\n\n.+(?<![。？\.\-])))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n((第.篇 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n((第.部分 .*)|(第[0-9]{1,2}章 .*)|([0-9]{1,2}))\n/g
reg = /\n(([上中下]编 .*)|(第.部分 .*)|(第[一二三四五六七八九十]{1,3}章 .*))\n/g
reg = /\n(([上中下]编 .*)|(第.部分 .*)|(第[一二三四五六七八九十]{1,3}章)|([0-9]{1,2}))\n/g
reg = /\n((卷[一二三四五六七八九十]{1,3}))\n/g
reg = /\n([一二三四五六七八九十]{1,3} .*)\n/g
reg = /\n((第.部分)|(第[一二三四五六七八九十]{1,3}章)|([0-9]{1,2}))\n/g
reg = /\n(卷　上|卷　下|补　遗|附　录|[一二三四五六七八九十]{1,3})\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}回.*|[一二三四五六七八九十]{1,3}、.*)\n/g
reg = /\n(第.{1,2}篇 .*|[一二三四五六七八九十]{1,3})\n/g
reg = /\n(.+(?<![。]))\n/g
reg = /\n(..部|..第.)\n/g
reg = /\n(第.卷|第.{1,5}回 ....... .......)\n/g
reg = /\n(([一二三四五六七八九十]{1,3}　.*)|(第[一二三四五六七八九十]{1,3}章)　.*|([0-9]{1,2}))\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|第[一二三四五六七八九十]{1,3}节 .*)\n/g
reg = /\n(.|..|...)\n/g


const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　'+v.trim()))


