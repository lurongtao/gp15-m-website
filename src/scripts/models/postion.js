module.exports = {
  get({start=0, count=10}) {
    return $.ajax({
      url: `/api/position`
    })
  }
}