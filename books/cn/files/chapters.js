const fs = require('fs');

//const bookid = process.argv[2];
const bookid = 468
let bookdata = fs.readFileSync('../'+bookid+'/a.txt', 'utf8')
//bookdata = bookdata.replace(/\r\n/g,'\n')
if(/\r/.test(bookdata)){
    console.log('\\r\\n to \\n')
    process.exit(1)
  }

// [^？。，、“”\d：（）《》！；\-——]$

// ([^？。，IⅡⅢV、“”\d：…（）\n《》！；\-——」])\n\n

// ​1 ​9 ​4

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
reg = /\n([0-9]{1,3})\n/g
reg = /\n(([^。^”^•^\s]){1,20})\n/g
reg = /\n(周易正義|楚辭洪興祖補註|[一二三四五六七八九十〇]{1,3} .*)\n/g
reg = /\n(第[一二三四五六七八九十百零〇]{1,5}章)\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[一二三四五六七八九十]{1,3}、.{2,50})\n/g
reg = /\n(([一二三四五六七八九十]{1,3} .*)|([0-9]{1,5})|【注释】)\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[一二三四五六七八九十]{1,3}、.*|（[一二三四五六七八九十]）.*)\n/g
reg = /\n([一二三四五六七八九十]{1,3}|第\d\d章)\n/g
reg = /\n(第[0-9]{1,5}章　.*|[一二三四五六七八九十百零]　.*)\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[一二三四五六七八九十百零])\n/g
reg = /\n(一九[五六][一二三四五六七八九十百零〇]年|[一二三四五六七八九十][一二]?月.{3,30})\n/g
reg = /\n(附录[一二三四五].*|第[一二三四五六七八九十百零]{1,5}章.*|[一二三四五六七八九十〇]{1,3}、.*)\n/g
reg = /\n(莲|水娃|矿克|保安||第[一二三四五六七八九十百零]{1,5}章|[一二三四五六七八九十〇]{1,3})\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}[篇章] .*|[0-9]{1,5})\n/g
reg = /\n(([一二三四五六七八九十]{1,3}、.*)|([0-9]{1,5}))\n/g
reg = /\n(第\d{1,5}章 .*|第[一二三四五六七八九十百零]{1,5}[卷] .*)\n/g
reg = /\n(.{1,50}[^？。，IⅡⅢV、“”\d：…（）\n《》！；\-——」])\n/g




const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　　'+v.trim()))


