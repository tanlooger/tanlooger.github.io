
 const fs = require('fs');

// const data = fs.readFileSync('老子.txt', 'utf8');

// const re = /(第[一二三四五六七八九十]{1,3}章)/g

// const data2 = data.replace(re, 'asdffsdafasdsf$1adfdsdeo97j')

// const myArray = data2.split('asdffsdafasdsf');

// let json = []

console.log('adsfsd')

for(let i=1; i<=5; i++){
  console.log(i)
  // const chapter = myArray[i].split("adfdsdeo97j")

  // console.log(chapter[0])

  // json.push({
  //   "slug": "cn/51/"+i,
  //   "title": chapter[0]
  // })

  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 睡前消息"+i+"期：\n---\n\n日睡前消息文字版第"+i+"期");

}

