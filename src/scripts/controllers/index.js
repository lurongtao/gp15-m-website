const layoutView = require('../views/layout.art')

class Index {
  constructor() {
    this.render()
  }

  render() {
    const html = layoutView({
      name: 'yangli'
    })
    
    document.querySelector('#root').innerHTML = html
  }
}

new Index()