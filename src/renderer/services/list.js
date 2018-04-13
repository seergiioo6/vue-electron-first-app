const fs = require('fs')

export default {

  getFiles (path) {
    return fs.readdirSync(path)
  }

}
