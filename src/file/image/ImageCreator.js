const fs = require('fs');
const path = require('path');

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((item, index) => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, item), filesList); //递归读取文件
        } else {
            var reg = /.png|.jpg/;
            if (fullPath.match(reg)) {
                filesList.push(fullPath.replace(__dirname, '.'));
            }
        }
    });
    return filesList;
}

const filesList = [];
readFileList(__dirname, filesList);

let ImagesContent = '';

filesList.forEach((item) => {
    ImagesContent += `export const ${item.split('/')[1].split('.')[0]} = require('${item}');\n`;
})

fs.writeFile('./Images.ts', ImagesContent, () => {
});
