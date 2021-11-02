#!/usr/bin/env node

const fs = require('fs');
const process = require("process");
const path = require('path')
let cwd = process.cwd();
let dirName = process.argv[2];

if (process.argv[2] === '-d') {
    cwd = path.join(cwd, process.argv[3])
    dirName = process.argv[4]
}

if (!fs.existsSync(cwd)) {
    throw new Error('目录不存在')
}

if (!dirName) {
    throw new Error('请输入文件夹名')
}

const fileName = firstToUpper(dirName);
const templatePath = `${__dirname}/Template.txt`
const templatePropsPath = `${__dirname}/Template.props.txt`
const templateStylesPath = `${__dirname}/Template.styles.txt`

fs.mkdir(`${cwd}/${dirName}`, () => {
    fs.readFile(templatePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let templateCode = data.toString();
        fs.writeFile(`${cwd}/${dirName}/${fileName}.tsx`, templateCode.replaceAll('FILE_NAME', fileName), () => {
        })
    });
    fs.readFile(templatePropsPath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let templateCode = data.toString();
        fs.writeFile(`${cwd}/${dirName}/${fileName}.props.ts`, templateCode.replaceAll('FILE_NAME', `${fileName}Props`), () => {
        })
    });
    fs.readFile(templateStylesPath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let templateCode = data.toString();
        fs.writeFile(`${cwd}/${dirName}/${fileName}.styles.ts`, templateCode, () => {
        })
    });
})

function firstToUpper(str) {
    return str.trim().replace(str[0], str[0].toUpperCase());
}

