const config = require('config')

const configByEnv = config.util.toObject(config)

module.exports = tom => {
  tom.setConfig(configByEnv)
}
