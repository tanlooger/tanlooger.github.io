
const fs = require('fs');

// ([^\x00-\xff])\n([^\x00-\xff])

const arr = [
 // "",
 'One',
  ]

  const CHAPTER = 1

  const data = fs.readFileSync('../29/a.txt', 'utf8');
  //const data = fs.readFileSync('a/'+CHAPTER+'.txt', 'utf8');

 //const re = /(第[一二三四五六七八九十]{1,3}章)/g
 //const re = '\n\n([一二三四五六七八九十]{1,2})\n\n'
 //const re = /(● .*\n\n)/g
 //const re = /(【.*】)/g
 let re = '\n\n('+arr.join('|').trim()+')\n\n'
 re = '\n\n\n\n(.*)\n\n\n\n\n'
 //re = '\n\n\n(CHAPTER .*)\n'
 re = '\n\n\n([0-9]{1,2}. .*)\n\n\n\n'
 re = '\n([0-9]{1,2})\n'
 re = '\n\n(Chapter [0-9]{1,2})\n\n'
 re = '\n\n(CHAPTER [0-9]{1,2} .*)\n\n'
 re = '\n(CHAPTER .*)\n\n'
 re = '\n\n\n\n((X|I|V){1,5}\..*)\n\n'
 re = '\n\\[ ([0-9]{1,3}) \\]\n'
 re = '\n(Chapter [0-9] .*)\n'

 const reg = new RegExp(re, 'g')
 console.log(reg)

 const data2 = data.replace(reg, 'asdffsdafasdsf$1adfdsdeo97j')

 const myArray = data2.split('asdffsdafasdsf');

 let json = []



console.log('adsfsd'+myArray.length)

//for(let i=21; i<=50; i++){
  for(let i=1; i<=myArray.length; i++){
    //console.log(i)
  const chapter = myArray[i].split("adfdsdeo97j")

  //console.log(chapter[0])

  json.push({
    //"slug": "en/29/"+i,
    "slug": "en/29/"+CHAPTER+'/'+i,
    //"title": arr[i],
    "title": chapter[0],
    //"child":[]
  })

  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 睡前消息"+i+"期：\n---\n\n日睡前消息文字版第"+i+"期");
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0].replace('●','').trim()+"\n---\n\n"+chapter[1].trim());
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+arr[i].trim()+"\n---\n\n");
  //fs.writeFileSync('a/'+i+'.txt', chapter[0]+ '\n\n\n\n\n\n'+ chapter[1].trim());
  fs.writeFileSync('bookchap.json', JSON.stringify(json));

  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0]+"\n---\n\n");
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");

}

