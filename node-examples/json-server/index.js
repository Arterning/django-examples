const { Random } = require('mockjs')
const Mock = require('mockjs')

module.exports = () => {
    const data = { users: [], bnds:[], articles: [], girls: [] }

    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}`, size: 'D-cup' })
    }

    //create by mockjs
    data.bnds = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1
      }]
    })

    data.articles = Mock.mock({
      'list|1-56': [{
        'id|+1': 1,
        "name": Random.string(8,10),
        "content": Random.cparagraph(10),
        "createdDate": Random.datetime(),
        "updateDate": Random.datetime(),
        "birthDate": Random.date('yyyy-MM-dd'),
        "avtar": Random.image(),
        "url": Random.url(),
        "isActive": Random.boolean(),
    }]
    })
  
    return data
}