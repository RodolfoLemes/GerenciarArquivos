const makeDir = require('make-dir');
const fs = require('fs')

module.exports= {
    async createDir(file, path){
        const dir = await makeDir(path)
        console.log(dir)
        //const callback = await this.moveFile(file)    

        //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
    },

    async moveFile(file){

    }
}
