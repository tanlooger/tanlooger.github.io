// 模拟数据
const ary = [
    {
      slug: [ 'yi/26' ],
      id: '0',
      parent_id: '',
      title: '革命的年代：1789—1848'
    },
    { slug: [ 'yi/26', 1 ], id: '1', parent_id: '0', title: '第一部分　前奏' },
    {
      slug: [ 'yi/26', 1, 1 ],
      id: '2',
      parent_id: '1',
      title: '第一章　“民族的春天”'
    },
    {
      slug: [ 'yi/26', 1, 1, 1 ],
      id: '3',
      parent_id: '2',
      title: '第一章-1　“民族的春天”'
    },
    { slug: [ 'yi/26', 2 ], id: '4', parent_id: '1', title: '第二部分　发展' },
    {
      slug: [ 'yi/26', 2, 2 ],
      id: '5',
      parent_id: '4',
      title: '第二章　大繁荣'
    },
    {
      slug: [ 'yi/26', 2, 3 ],
      id: '6',
      parent_id: '4',
      title: '第三章　统一的世界'
    },
    {
      slug: [ 'yi/26', 2, 4 ],
      id: '7',
      parent_id: '4',
      title: '第四章　冲突与战争'
    },
    {
      slug: [ 'yi/26', 2, 5 ],
      id: '8',
      parent_id: '4',
      title: '第五章　民族的创建'
    },
    {
      slug: [ 'yi/26', 2, 6 ],
      id: '9',
      parent_id: '4',
      title: '第六章　民主力量'
    },
    {
      slug: [ 'yi/26', 2, 7 ],
      id: '10',
      parent_id: '4',
      title: '第七章　失败者'
    },
    {
      slug: [ 'yi/26', 2, 8 ],
      id: '11',
      parent_id: '4',
      title: '第八章　胜利者'
    },
    {
      slug: [ 'yi/26', 2, 9 ],
      id: '12',
      parent_id: '4',
      title: '第九章　变化中的社会'
    },
    { slug: [ 'yi/26', 3 ], id: '13', parent_id: '1', title: '第三部分　结果' },
    {
      slug: [ 'yi/26', 3, 10 ],
      id: '14',
      parent_id: '13',
      title: '第十章　土地'
    },
    {
      slug: [ 'yi/26', 3, 11 ],
      id: '15',
      parent_id: '13',
      title: '第十一章　流动的人'
    },
    {
      slug: [ 'yi/26', 3, 12 ],
      id: '16',
      parent_id: '13',
      title: '第十二章　城市·工业·工人阶级'
    },
    {
      slug: [ 'yi/26', 3, 13 ],
      id: '17',
      parent_id: '13',
      title: '第十三章　资产阶级世界'
    },
    {
      slug: [ 'yi/26', 3, 14 ],
      id: '18',
      parent_id: '13',
      title: '第十四章　科学·宗教·意识形态'
    },
    {
      slug: [ 'yi/26', 3, 15 ],
      id: '19',
      parent_id: '13',
      title: '第十五章　艺术'
    }
  ]

/**
 * 递归通过父节点ID生成树结构
 * 思路：
 *      1. 第一次递归的时候查询出所有的父节点
 *      2. 然后通过当前父节点id不断地去查询所有子节点，直到递归完毕返回
 * @param {String} pid 父节点id
 */
function getTrees(pid='') {
    if(!pid) {
        // 如果没有父id（第一次递归的时候）将所有父级查询出来
        return ary.filter(item => !item.parent_id).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {title: item.title, slug:item.slug.join('/')}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    } else {
        return ary.filter(item => item.parent_id === pid).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {title: item.title, slug:item.slug.join('/')}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    }
}

function traverse(obj) {
    for (var a in obj) {
      if (typeof(obj[a]) == "object") {
        traverse(obj[a]); //递归遍历
      } else {
        console.log(a + "=" + obj[a]); //如果是值就显示
      }
    }
}


console.log(JSON.stringify(getTrees()[0])) 
