import detailView from '../views/detail.art'

class Detail {
  render() {
    let html = detailView()

    $('#root').html(html)
  }
}

export default new Detail()