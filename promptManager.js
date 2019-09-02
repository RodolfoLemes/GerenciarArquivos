const makeDir = require('make-dir');
const fs = require('fs')
const path = require('path')

module.exports= {
    ABSOLUTE_PATH: path.resolve(''),

    files: [],
    indexFiles: [],
    filesTypes: [],

    readFiles(){
        this.files = fs.readdirSync(this.ABSOLUTE_PATH).filter(fileName => {
            for(type of this.filesTypes){
                if(path.extname(fileName) === type){
                    return true
                }
            }
        })
        if(this.files === []){
            return false
        } else {
            return true
        }
    },

    makeIndexFiles(){
        this.indexFiles = this.files.map(element => {
            let pathFile = element.split('.')[0].split('-')[1]
            return pathFile
        })
    },

    async doTheJoob(){
        for(index in this.files){
            await makeDir(this.indexFiles[index])
            await fs.renameSync(this.files[index], this.indexFiles[index] + '/' + this.files[index])
        }
    },
}
