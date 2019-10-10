const layoutView = require('../views/layout.art')

import positionController from './positions'
import searchController from './search'
import profileController from './profile'

class Index {
  constructor() {
    this.render()
  }

  bindClick() {
    $(this).addClass('active').siblings().removeClass('active')

    let currentPage = $(this).attr('data-page')

    let pageControllers = {
      positionController,
      searchController,
      profileController
    }

    // let pageControllers = [
    //   positionController,
    //   searchController,
    //   profileController
    // ]

    // pageControllers[$(this).index()].render()
    pageControllers[currentPage + 'Controller'].render()

    // switch(currentPage) {
    //   case 'position':
    //     positionController.render()
    //     break;
    //   case 'search':
    //     searchController.render()
    //     break;
    //   case 'profile':
    //     profileController.render()
    //     break;
    //   default:
    //     positionController.render()
    // }
  }

  render() {
    const html = layoutView()
    
    $('#root').html(html)

    // 绑定事件
    $('footer li').on('click', this.bindClick)

    // 初始化第一个页面
    positionController.render()
  }
}

new Index()