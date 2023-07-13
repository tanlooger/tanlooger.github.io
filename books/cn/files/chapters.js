const fs = require('fs');

//const bookid = process.argv[2];
const bookid = 204
let bookdata = fs.readFileSync('../'+bookid+'/a.txt', 'utf8')

// [^？。，、“”\d：（）《》！；\-——]$

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
reg = /\n(周易正義|毛詩正義|左轉正義|史記會註考證|老子王弼註|列子張湛註|焦氏易林|楚辭洪興祖補註|太平廣記|全上古三代秦漢三國六朝文|[一二三四五六七八九十〇]{1,3} .*)\n/g
reg = /\n(第[一二三四五六七八九十百零〇]{1,5}章)\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[一二三四五六七八九十]{1,3}、.{2,50})\n/g
reg = /\n(([一二三四五六七八九十]{1,3} .*)|([0-9]{1,5})|【注释】)\n/g
reg = /\n(([一二三四五六七八九十]{1,3} .*)|([0-9]{1,5}))\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[一二三四五六七八九十]{1,3}、.*|（[一二三四五六七八九十]）.*)\n/g
reg = /\n([一二三四五六七八九十]{1,3}|第\d\d章)\n/g
reg = /\n(第[一二三四五六七八九十百零]{1,5}章 .*|[0-9]{1,5})\n/g
reg = /\n(第[0-9]{1,5}章　.*|[一二三四五六七八九十百零]　.*)\n/g






const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　'+v.trim()))


