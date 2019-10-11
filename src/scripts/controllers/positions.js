const positionView = require('../views/position.art')
const positionListView = require('../views/position-list.art')
const postionModel = require('../models/postion')

import indexController from './index'

const BScroll = require('better-scroll')

class Position {
  constructor() {
    // this.render()
    this.list = []
    this.pageNo = 1
    this.totalCount = 0
    this.pageSize = 15
  }

  renderer(list) {
    let positionListHtml = positionListView({
      list
    })

    $('main ul').html(positionListHtml)

    $('main ul li').on('tap', function() {
      let id = $(this).attr('data-id')
      location.hash = `detail/${id}`
    })
  }

  async render() {
    indexController.render()
    // js
    $('html').css({
      'font-size': '100px',
      'background': '#eee',
      'overflow-y': 'hidden'
    })
    $('body').css({
      'overflow': 'hidden'
    })

    let that = this

    let result = await postionModel.get({
      pageNo: this.pageNo
    })

    // 把PositionView 先装填到main里
    let positionHtml =  positionView({})
    let $main = $('main')
    $main.html(positionHtml)

    // 再把list装到ul里
    let list = this.list = result.content.data.page.result
    that.totalCount = result.content.data.page.totalCount

    this.renderer(list)

    // 定义图片对象
    let $imgHead = $('.head img')
    let $imgFoot = $('.foot img')

    // bScroll 是BetterScroll实例，将来可以用来调用API
    let bScroll = new BScroll.default($('main').get(0), {
      probeType: 2
    })

    // 开始要隐藏下拉刷新的div
    bScroll.scrollBy(0, -40)

    bScroll.on('scrollEnd', async function() {
      // 下拉刷新
      if (this.y >= 0) {
        
        $imgHead.attr('src', '/assets/images/ajax-loader.gif')
        
        let result = await postionModel.get({
          pageNo: 1,
          pageSize: 1
        })
        
        let { result: list } = result.content.data.page

        // 1. 将原来数据list和现在返回的数据做拼接，
        // 2.重新渲染
        that.list = [...list, ...that.list]
        that.renderer(that.list)

        bScroll.scrollBy(0, -40)
        $imgHead.attr('src', '/assets/images/arrow.png')
        $imgHead.removeClass('up')
      }

      // 上拉加载更多
      if (this.maxScrollY >= this.y && Math.ceil(that.totalCount/that.pageSize) >= that.pageNo) {
        that.pageNo++

        $imgFoot.attr('src', '/assets/images/ajax-loader.gif')

        let result = await postionModel.get({
          pageNo: that.pageNo,
          pageSize: that.pageSize
        })
        
        let { result: list, totalCount } = result.content.data.page

        // 更新pageCount, 因为有新的内容发布出来了
        that.totalCount = totalCount

        // 1.将原来数据list和现在返回的数据做拼接，
        // 2.重新渲染
        that.list = [...that.list, ...list]
        that.renderer(that.list)

        bScroll.scrollBy(0, 40)
        $imgHead.attr('src', '/assets/images/arrow.png')
        $imgHead.removeClass('down')
      }
    })

    bScroll.on('scroll', function() {
      if (this.y > 0) {
        $imgHead.addClass('up')
      }

      if (this.maxScrollY > this.y) {
        $imgFoot.addClass('down')
      }
    })
  }
}

export default new Position()