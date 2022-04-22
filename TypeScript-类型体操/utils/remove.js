const path = require('path');
const fs = require('fs');

function getFolders() {
  let folders = []
  const files = fs.readdirSync('./src')
  files.forEach(item => {
    let stat = fs.lstatSync("./src/" + item)
    if (stat.isDirectory() === true) {
      folders.push(item)
    }
  })
  return folders
}

function processFile() {
  const files = fs.readdirSync('../src')
  files.forEach( item => {
    let stat = fs.lstatSync("../src/" + item)
    if (stat.isDirectory() === true) {
      fs.readFile(`../src/${item}/template.ts`, (err, data) => {
        if (err) throw err
        writeFile(item, data.toString())
      })

      fs.readFile(`../src/${item}/test-case.ts`, (err, data) => {
        if (err) throw err
        let dataStr = 
        `// ------- test case start----------------
        ${data.toString()}
        // ------- test case end----------------`
        writeFile(item, dataStr)
      })
    }
  })
}

function writeFile(name, content) {
  fs.writeFile(`../src/${name}.ts`, content + '\n', { flag: 'a' }, (err) => {
    if (err) throw err
    console.log(`write ${name} success!`)
  })
}

processFile()
