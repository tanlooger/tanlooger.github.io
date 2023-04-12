
 const fs = require('fs');

// ([^\x00-\xff])\n([^\x00-\xff])

const arr = [
  "",
 '第一部分 从伊甸园到卡哈马卡',
 '第二部分 食物生产的兴起与扩散 ',
 '第三部分 从食物到枪炮、病菌与钢铁',
 '第四部分 环游世界'
  ]

  const CHAPTER = 1

  const data = fs.readFileSync('../21/a.txt', 'utf8');
  //const data = fs.readFileSync('a/'+CHAPTER+'.txt', 'utf8');
 // 　　　　　　　　　　　　　　　　　　　　　　　　　中文空格
 //const re = /(第[一二三四五六七八九十]{1,3}章)/g
 //const re = /(● .*\n\n)/g
 //const re = /(【.*】)/g
 let re = '\n('+arr.join('|')+')\n'
 //re = '\n\n(第[一二三四五六七八九十]{1,3}部)\n\n'
 //re = '\n=======([0-9]{1,2})\n'
 //re = '\n[XVI]{1,5}\n'
 re = '\n\n([一二三四五六七八九十]{1,3})\n\n'
 re = '\n\n(第[一二三四五六七八九十]{1,3}卷)\n\n'
 re = '\n('+arr.join('|')+')\n'
 re = '\n\n(第[一二三四五六七八九十]{1,3}编)\n\n'
 re = '\n\n(第[0-9]+章 .*)\n\n'
 re = '\n\n\n([0-9]{1,2})\n\n\n'
 re = '\n(第.编　.*)\n'
 re = '\n\n(第[一二三四五六七八九十]{1,3}章　.*)\n\n'
 re = '\n\n(第.篇　.*)\n\n'
 re = '\n\n(第.篇)\n\n'
 re = '\n(第[一二三四五六七八九十]{1,3}章 .*)\n'
 re = '\n(第.*章 .*)\n'
 re = '\n(第[0-9]{1,2}章 .*)\n'



 
 const reg = new RegExp(re, 'g')
 console.log(reg)

 const data2 = data.replace(reg, 'asdffsdafasdsf$1adfdsdeo97j')

 const myArray = data2.split('asdffsdafasdsf');

 let json = []



console.log('adsfsd '+myArray.length)

//for(let i=1; i<=arr.length; i++){
  for(let i=1; i<=myArray.length; i++){
    //console.log(i)
  const chapter = myArray[i].split("adfdsdeo97j")

  //console.log(chapter[0])

  json.push({
    //"slug": "yi/21/"+i,
    "slug": "yi/21/"+CHAPTER+'/'+i,
    //"title": arr[i],
    "title": chapter[0],
    //"title": '第'+chapter[0]+'章',
    //"title": '第'+i+'章'
    //"description": ""
    //"child": []
  })

  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 睡前消息"+i+"期：\n---\n\n日睡前消息文字版第"+i+"期");
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0].replace('●','').trim()+"\n---\n\n"+chapter[1].trim());
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 第"+chapter[0]+"章\n---\n\n"+chapter[1].trim());
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 第"+i+"章\n---\n\n"+chapter[1].trim());
  
   //fs.mkdirSync(i+'')
   //fs.writeFileSync('a/'+i+'.txt', chapter[0]+'\n\n'+ chapter[1].trim());
   //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0]+"\n---\n\n");

  fs.writeFileSync('bookchap.json', JSON.stringify(json));
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+arr[i]+"\n---\n\n");
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");

}

