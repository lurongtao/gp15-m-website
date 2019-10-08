const positionView = require('../views/position.art')
const postionModel = require('../models/postion')

const BScroll = require('better-scroll')

class Position {
  constructor() {
    this.render()
  }

  async render() {
    let result = await postionModel.get({
      pageNo: 3
    })
    
    let html = positionView({
      list: result.content.data.page.result
    })

    let $main = $('main')
    $main.html(html)

    // 定义图片对象
    let $imgHead = $('.head img')
    let $imgFoot = $('.foot img')

    // bScroll 是BetterScroll实例，将来可以用来调用API
    let bScroll = new BScroll.default($main.get(0), {
      probeType: 2
    })

    // 开始要隐藏下拉刷新的div
    bScroll.scrollBy(0, -40)

    bScroll.on('scrollEnd', () => {
      console.log(0)
    })

    bScroll.on('scroll', function() {
      if (this.y > 0) {
        $imgHead.addClass('up')
      }
    })

    // let obj = {
    //   xml: {
    //     x: {a: 0},
    //     y: {a: 1},
    //     z: {a: 2}
    //   }
    // }

    // {
    //   x: 0,
    //   y: 1,
    //   z: 2
    // }

    // let result = [1, 4, 5].reduce((total, item) => {
    //   return total + item
    // }, 0)

    // let result = Object.keys(obj.xml).reduce((res, item) => {
    //   res[item] = obj.xml[item]['a']
    //   return res
    // }, {})
    
    // console.log(result)

    // console.log($.os.phone)

    // $('div').on('myEvent', () => {
    //   console.log(0)
    // })

    // setTimeout(() => {
    //   $('div').trigger('myEvent')
    // }, 5000)

    // $('body').on('swipeLeft', (e) => {
    //   console.log(e)
    // })

    // let x = 0

    // function getX() {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(x+1)
    //     }, 3000)
    //   })
    // }
    
    // (async () => {
    //   let result = await getX()
    // })()
  }
}

new Position()