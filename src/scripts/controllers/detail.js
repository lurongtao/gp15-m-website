import detailView from '../views/detail.art'
// import '../../styles/modules/cover-lagou.scss'

class Detail {
  render() {
    let html = detailView()

    $('#root').html(html)

    $('#header').on('click', () => {
      location.hash = 'position'
    })

    // js
    $('html').css({
      'font-size': '65.5%',
      'background': '#fff',
      'overflow-y': 'scroll'
    })
    $('body').css({
      'overflow-y': 'scroll'
    })

    // 获取id
    let hash = location.hash
    let reg = RegExp('(\\d+)$', 'g')
    let id = reg.exec(hash)
    console.log(id[1])
  }
}

export default new Detail()