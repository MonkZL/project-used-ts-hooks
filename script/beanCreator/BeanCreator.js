#!/usr/bin/env node

const fs = require('fs');
const process = require("process");
const path = require('path')

let cwd = process.cwd();
let beanName = process.argv[2];

if (process.argv[2] === '-d') {
    cwd = path.join(cwd, process.argv[3]);
    beanName = process.argv[4];
}

if (!fs.existsSync(cwd)) {
    throw new Error('目录不存在')
}

if (!beanName) {
    throw new Error('请输入beanName')
}

let codeTemplate = fs.readFileSync(`${__dirname}/BeanCodeTemplate.txt`).toString();
const buffer = fs.readFileSync(`${__dirname}/JsonClipboard.txt`).toString();

const bean = JSON.parse(buffer);

function ergodicProps(bean) {
    let propsCode = '';
    if (Array.isArray(bean)) {
        bean = bean[0]
    }
    for (let beanKey in bean) {
        const beanElement = bean[beanKey];
        if (typeof beanElement === "object") {
            if (Array.isArray(beanElement)) {
                if (typeof beanElement[0] === "object") {
                    propsCode += `${beanKey}: {${ergodicProps(beanElement[0])}}[],`
                }else {
                    propsCode += `${beanKey}: ${typeof beanElement[0]}[],`
                }
            } else {
                propsCode += `${beanKey}: {${ergodicProps(beanElement)}},`
            }
        } else {
            propsCode += `${beanKey}: ${typeof beanElement},`
        }
    }
    return propsCode
}

codeTemplate = codeTemplate.replaceAll('FILE_NAME', firstToUpper(beanName));
codeTemplate = codeTemplate.replaceAll('PROPS', ergodicProps(bean));

fs.writeFileSync(`${cwd}/BeanTest.ts`, codeTemplate)

function firstToUpper(str) {
    return str.trim().replace(str[0], str[0].toUpperCase());
}
