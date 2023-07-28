const fs = require('fs');


let bookdata = fs.readFileSync('../150/a.txt', 'utf8')

// 不以“夫”开头，不以“妇”结尾
// ^[^夫].*(?<!妇)\n
// exp1(?=exp2)：查找 exp2 前面的 exp1。
// (?<=exp2)exp1：查找 exp2 后面的 exp1。
// exp1(?!exp2)：查找后面不是 exp2 的 exp1。
// (?<!exp2)exp1：查找前面不是 exp2 的 exp1。


let reg = /　/g
// \n\n\n\n\n\n.+(?<![。？\.\-])\n
reg = /\n((第.部分.*)|(第[一二三四五六七八九十〇]{1,3}章.*)|([0-9]{1,2})|([一二三四五六七八九十]、.*))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*)|(\n\n\n\n\n.+(?<![。？\.\-])))\n/g
reg = /\n((第.部 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n((第.篇 .*)|(第[0-9]{1,2}章 .*))\n/g
reg = /\n(([上中下]编 .*)|(第.部分 .*)|(第[一二三四五六七八九十]{1,3}章 .*))\n/g
reg = /\n(([上中下]册 .*)|(第[一二三四五六七八九十]{1,3}[章节] .*))\n/g
reg = /\n(.{3,50})\n/g
reg = /\n((资本论- 第.部)|[IVXL]{1,5}[、．].*|[0-9]{1,5}、.*|(第[一二三四五六七八九十]{1,3}章.*))\n/g
reg = /\n(第.册|第.卷|第.部|[一二三四五六七八九十]{1,3}|尾声|[0-9]{1,5})\n/g
reg = /\n(词汇表|(第.部分 .*)|(第[0-9]{1,2}章 .*)|([0-9]{1,3}\.[0-9]{1,3} .*))\n/g
reg = /\n(第.章|第.卷|第.部|[一二三四五六七八九十]{1,3}|尾声|[0-9]{1,5}\..*)\n/g
reg = /\n([一二三四五六七八九十]{1,3}、.*|[0-9]{1,3})\n/g
reg = /\n(第.部|[一二三四五六七八九十]{1,3})\n/g
reg = /\n(第.部|[0-9]{1,3})\n/g
reg = /\n(注释|(第.部)|[一二三四五六七八九十]{1,3}|([0-9]{1,3}))\n/g
reg = /\n(注释|(第[0-9]{1,2}章.*)|(\n\n\n\n\n.{2,50}\n))\n/g
reg = /\n(后记：我们的黄金时代吗？|后记|第[一二三四五六七八九十]{1,3}编　.*|第[一二三四五六七八九十]{1,3}章　.*|([一二三四五六七八九十]{1,3}、.*))\n/g
reg = /\n(第[一二三四五六七八九十]{1,3}篇.*|第\d\d章.*|第[一二三四五六七八九十]{1,3}章　.*|.{2,30}(?<![\*…：。，？！、：；\-——]))\n/g




const chaps = bookdata.match(reg)

chaps.map(v=>console.log('　　'+v.trim()))


