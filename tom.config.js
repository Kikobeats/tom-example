const config = require('config')

module.exports = tom => {
  tom.setConfig(config.util.toObject(config))

  tom.on('payment:create', data => {
    console.log('payment:create', data)
  })
  tom.on('payment:update', data => {
    console.log('payment:update', data)
  })

  tom.on('notification:email', data => {
    console.log('notification:email', data)
  })
}
