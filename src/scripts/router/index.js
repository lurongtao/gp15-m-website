// 显示layout
import indexController from '../controllers/'

import positionController from '../controllers/positions'
import searchController from '../controllers/search'
import profileController from '../controllers/profile'

class Router {
  constructor() {
    this.render()
  }

  render() {
    window.addEventListener('load', this.handlePageload.bind(this))
    window.addEventListener('hashchange', this.handleHashchange.bind(this))
  }

  setActiveClass(hash) {
    $(`footer li[data-to=${hash}]`).addClass('active').siblings().removeClass('active')
  }

  renderDOM(hash) {
    let pageControllers = {
      positionController,
      searchController,
      profileController
    }

    pageControllers[hash + 'Controller'].render()
  }

  handlePageload() {
    let hash = location.hash.substr(1) || 'position'
    indexController.render()
    location.hash = hash

    // 初始化的时候也需要渲染DOM和设置高亮
    this.renderDOM(hash)
    this.setActiveClass(hash)
  }

  handleHashchange(e) {
    let hash = location.hash.substr(1)

    // 渲染DOM
    this.renderDOM(hash)
    // 设置高亮
    this.setActiveClass(hash)
  }
}

new Router()


// // 初始化第一个页面
// positionController.render()