const fs = require('fs')
const {exec} = require('child_process')
module.exports.readRecursive = (path) => {
  let list = []
  let files = fs.readdirSync(path)
  for (let file of files) {
    let stats = fs.lstatSync(`${path}/${file}`)
    if (stats.isDirectory()) {
      list.push({
        name: file,
        path: `${path}/${file}`,
        type: 'directory',
        files: this.readRecursive(`${path}/${file}`)
      })
    } else {
      list.push({name: file, path: `${path}/${file}`, type: 'file'})
    }
  }
  return list
}
