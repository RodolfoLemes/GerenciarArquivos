const promptManager = require('./promptManager')
const fs = require('fs')
const path = require('path')

const ABSOLUTE_PATH = path.resolve('')

var files = fs.readdirSync(ABSOLUTE_PATH + '/teste').filter(fileName => {
    return path.extname(fileName) === '.txt'
})
console.log(files)

var indexFiles = files.map(element => {
    let pathFile = element.split('.')[0].split('-')[1]
    return pathFile
})

console.log(indexFiles)

for(index in files){
    promptManager.createDir(files[index], indexFiles[index])
}
//promptManager.createDir()