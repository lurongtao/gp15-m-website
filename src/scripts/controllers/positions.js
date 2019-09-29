const positionView = require('../views/position.art')

// const BScroll = require('better-scroll')

class Position {
  constructor() {
    this.render()
  }

  render() {
    let main = document.querySelector('main')
    let html = positionView({})
    main.innerHTML = html
    
    new BScroll(main, {})
  }
}

new Position()