const positionView = require('../views/position.art')

const BScroll = require('better-scroll')

class Position {
  constructor() {
    this.render()
  }

  render() {
    let html = positionView({})
    let $main = $('main')
    $main.html(html)
    new BScroll.default($main.get(0), {})

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

    console.log($.os.phone)
  }
}

new Position()