const { AssertionError } = require("assert");
const { assert } = require("console");
const fs = require("fs");
const path = require("path");

const bookid = 26;
let bookdata = fs.readFileSync(`../${bookid}/a.txt`, "utf8");

//const [prologue, content] = bookdata.split('>>>正文开始<<<')
//console.log(content)

//const reg = /(?<=(?:\nVVV目录开始VVV\n))(.*)(?=(?:\nΛΛΛ目录结束ΛΛΛ\n))/s
//const reg = /(.*?)\n\n/s

const chaps = /(.*?)\n\n/s.exec(bookdata)[0].trim().split("\n");

let i = 0;
for (i = 0; i < chaps.length - 1; i++) {
  const firstindex = bookdata.indexOf("\n" + chaps[i + 1].trim() + "\n");
  //assert(firstindex > 0, chaps[i+1]+'　的位置要大于0')
  if (firstindex <= 0) {
    console.log(chaps[i + 1] + "　未找到");
    //process.exit(1);
  }
}



let allchapter = []
let levelprev = 0
let json = {}
let levelcount = []
for (i = 0; i < chaps.length - 1; i++) {
  const level = chaps[i].search(/(?!　)/);
  levelcount[level]== undefined ? levelcount[level]=1 : levelcount[level]++
  let prevslug = i?allchapter[i-1].slug.slice(0, level):[0]
  if(i)console.log(allchapter[i-1].slug)

  if(levelprev+1 == level){
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:(i-1)+'', title:chaps[i].trim()})
  }else
  if(levelprev > level){
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:allchapter[allchapter[i-1].parent_id].parent_id+'', title:chaps[i].trim()})
  }else{
    if(i>0)
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
    else
    allchapter.push({slug:['yi/'+bookid], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
  }

  levelprev = level





  const firstindex = bookdata.indexOf("\n" + chaps[i + 1].trim() + "\n");

  //const tmp = bookdata.split(re)
  //fs.writeFileSync(i+'.mdx', (i?chaps[i-1].trim():'')+'\n\n'+tmp[0])
  //console.log(tmp[0])
  mkdirsSync(allchapter[i].slug.slice(-1).join('/'))
  fs.writeFileSync(allchapter[i].slug.join('/') + ".mdx", "\n" + bookdata.substring(0, firstindex));
  //fs.writeFileSync(i+'.mdx', bookdata)
  bookdata = bookdata.substring(firstindex);
  //bookdata = tmp.slice(1).join()
  //preindex = firstindex

  if (i + 1 == chaps.length) {
    //fs.writeFileSync((i+1)+'.mdx', (chaps[i].trim())+'\n\n'+bookdata)
  }
}
fs.writeFileSync(i + ".mdx", bookdata);

fs.writeFileSync("book.json", JSON.stringify(getTrees()[0]));

//chaps.map(v=>console.log(v.trim()))

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}





function getTrees(pid='') {
    if(!pid) {
        // 如果没有父id（第一次递归的时候）将所有父级查询出来
        return allchapter.filter(item => !item.parent_id).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {title: item.title, slug:item.slug.join('/')}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    } else {
        return allchapter.filter(item => item.parent_id === pid).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {title: item.title, slug:item.slug.join('/')}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    }
}