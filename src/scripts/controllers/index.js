const layoutView = require('../views/layout.art')

class Index {
  constructor() {
    this.render()
  }

  render() {
    const html = layoutView({
      name: 'yangli'
    })
    
    $('#root').html(html)
  }
}

new Index()