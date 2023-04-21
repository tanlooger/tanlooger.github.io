const { AssertionError } = require("assert");
const { assert } = require("console");
const fs = require("fs");
const path = require("path");

//console.log(process.argv.slice(2))
//process.exit(0)

const bookid = process.argv[2];
const relevels = process.argv.slice(3)   // [3, 4, 9]
//console.log(relevels)
//process.exit(0)

let bookdata = fs.readFileSync(`../${bookid}/a.txt`, "utf8");

//const [prologue, content] = bookdata.split('>>>正文开始<<<')
//console.log(content)

//const reg = /(?<=(?:\nVVV目录开始VVV\n))(.*)(?=(?:\nΛΛΛ目录结束ΛΛΛ\n))/s
//const reg = /(.*?)\n\n/s

const chaps = /(.*?)\n\n/s.exec(bookdata)[0].trim().split("\n");



bookdata = bookdata.replace(chaps[0], chaps[0]+'\n```')
bookdata = bookdata.replace(chaps[chaps.length-1], chaps[chaps.length-1]+'\n```')

let i = 0;
for (i = 0; i < chaps.length - 1; i++) {
  const firstindex = bookdata.indexOf("\n" + chaps[i + 1].trim() + "\n");
  //assert(firstindex > 0, chaps[i+1]+'　的位置要大于0')
  if (firstindex <= 0) {
    console.log(chaps[i + 1] + "　未找到");
    process.exit(1);
  }
}



let allchapter = []
let levelprev = 0
let json = {}
let levelcount = []
for (i = 0; i < chaps.length; i++) {
  const level = chaps[i].search(/(?!　)/);
  levelcount[level]== undefined ? levelcount[level]=1 : levelcount[level]++
  let prevslug = i?allchapter[i-1].slug.slice(0, level):[0]

  if(levelprev+1 == level){
    if(relevels.includes(level+''))levelcount[level]=1
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:(i-1)+'', title:chaps[i].trim()})
  }else
  if(levelprev > level){
    console.log('level='+level)
    //console.log(allchapter[i-1].slug[level].parent_id)
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:getParent_id(i-1, levelprev-level), title:chaps[i].trim()})
  }else{
    if(i>0)
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
    else
    allchapter.push({slug:['yi/'+bookid], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
  }

  levelprev = level





  const nextindex = i<chaps.length-1 ? bookdata.indexOf("\n" + chaps[i + 1].trim() + "\n") : bookdata.length;

  //const tmp = bookdata.split(re)
  //fs.writeFileSync(i+'.mdx', (i?chaps[i-1].trim():'')+'\n\n'+tmp[0])
  console.log(i+allchapter[i].slug.slice(0, -1).join('/'))

  if(i)mkdirsSync(allchapter[i].slug.slice(0, -1).join('/'))
  else mkdirsSync(allchapter[i].slug.join('/'))
  const mdxtext = bookdata.substring(0, nextindex).trim().replace(/^(.*)$/m, "---\n---\n---\ntitle: $1\n---\n\n")
  fs.writeFileSync(allchapter[i].slug.join('/') + ".mdx", mdxtext);
  //fs.writeFileSync(i+'.mdx', bookdata)
  bookdata = bookdata.substring(nextindex);
  //bookdata = tmp.slice(1).join()
  //preindex = firstindex

  if (i + 1 == chaps.length) {
    //fs.writeFileSync((i+1)+'.mdx', (chaps[i].trim())+'\n\n'+bookdata)
  }
}
// mkdirsSync(allchapter[i].slug.slice(0, -1).join('/'))
// fs.writeFileSync(allchapter[i].slug.join('/') + ".mdx", bookdata);

//console.log(allchapter)

fs.writeFileSync(allchapter[0].slug+"/book.json", JSON.stringify(getTrees()[0]));

fs.copyFileSync(`../${bookid}/a.txt`, allchapter[0].slug+'/a.txt');

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
            let a = {slug:item.slug.join('/'), title: item.title}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    } else {
        return allchapter.filter(item => item.parent_id === pid).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {slug:item.slug.join('/'), title: item.title}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    }
}


function getParent_id(i, count){
  if(count){
    console.log('count.....'+count)
    return getParent_id(allchapter[i].parent_id, count-1)
  }

  return allchapter[i].parent_id
}