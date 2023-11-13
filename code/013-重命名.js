const { log } = require('console');
const fs = require('fs');


// const filePath = '../练习/code';
const filePath = '.'; // 当前文件夹

// 重名文件
// 读取 ../练习/code 文件夹中的文件列表
const files = fs.readdirSync(filePath);

// console.log(files);

files.forEach((item, index) => {
    // 正则, 将 item 中的数字 文件名拆分出来
    let reg = /\d+/g;
    let num = item.match(reg)[0];
    let fileName = item.replace(reg, '');
    // console.log([num, fileName]);

    num = num * 1;
    if (Number(num) < 10) {
        num = '00' + num;
    } else {
        num = '0' + num;
    }

    let newFileName = `${num}${fileName}`;
    // console.log('newFileName :>>', newFileName)

    // 重命名
    fs.renameSync(`${filePath}/${item}`, `${filePath}/${newFileName}`);

    if (index === files.length - 1) {
        // 最后一次循环
        console.log('完成写入');
    }
})
