const data = require('./data.json')
module.exports = [
  // user logout
  {
    url: '/getChartsData',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data
      }
    }
  }
]
