const promptManager = require('./promptManager')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  

console.log('Instruções: \n')
console.log("1) Se tiver mais um tipo de arquivo coloque um '-'.\n")
console.log("2) Não coloque '.' apenas o tipo de arquivo.\n")
console.log("3) Só será manipulado arquivos que tenha nome no formato: XXX-data-XXX.\n")

rl.question('Quais tipos de arquivos você deseja manipular? ', (answer) => {
    // TODO: Log the answer in a database

    if(answer.includes('.')){
        console.log('. Não é permitido')
        return rl.close()
    }

    let types = answer.split('-').map((item) => {
        return '.' + item
    })
    
    try {
        promptManager.filesTypes = types
        if(!promptManager.readFiles()){
            console.log('Não existem arquivos nesse diretório!')
            return rl.close()
        }
        promptManager.makeIndexFiles()
        promptManager.doTheJoob() 
    } catch (error) {
        console.log('Algo de errado aconteceu')
        return rl.close()
    }

    console.log('Sucesso, suas fotos foram movidas!')
    rl.close();
});