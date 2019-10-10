import profileView from '../views/profile.art'

class Profile {
  render() {
    let html = profileView({})
    $('main').html(html)
  }
}

export default new Profile()