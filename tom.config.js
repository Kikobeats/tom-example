const config = require('config')

module.exports = tom => {
  tom.setConfig(config.util.toObject(config))
}
