import _ from 'lodash'
import profileView from '../views/profile.art'

class Profile {
  render() {
    let html = profileView({})
    $('main').html(html)
  }
}

export default new Profile()

console.log(_.chunk(['a', 'b', 'c', 'd'], 2))