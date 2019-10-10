const layoutView = require('../views/layout.art')

class Index {
  bindClick() {
    // 页面切换
    location.hash = $(this).attr('data-to')
  }

  render() {
    const html = layoutView()
    
    $('#root').html(html)

    // 绑定事件
    $('footer li').on('click', this.bindClick)
  }
}

export default new Index()