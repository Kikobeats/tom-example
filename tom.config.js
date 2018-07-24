const config = require('config')

module.exports = tom => {
  tom.setConfig(config.util.toObject(config))

  tom.on('payment:create', data => {
    console.log('payment:create', data)
  })
  tom.on('payment:update', data => {
    console.log('payment:update', data)
  })

  tom.on('notification', data => {
    console.log('notification', data)
    return { foo: 'bar' }
  })

  tom.on('notification:email', data => {
    console.log('notification:email', data)
    return { hello: 'bar' }
  })

  tom.on('*', data => {
    console.log('global notification', data)
    return { kiko: 'bar' }
  })
}
