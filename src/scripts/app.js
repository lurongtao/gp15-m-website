const layoutView = require('./views/layout.art')

const html = layoutView({
  name: 'yangli'
})

document.querySelector('#root').innerHTML = html