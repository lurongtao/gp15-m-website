import profileView from '../views/profile.art'

class Profile {
  constructor() {
    this.render()
  }

  render() {
    let html = profileView({})
    $('main').html(html)
  }
}

new Profile()