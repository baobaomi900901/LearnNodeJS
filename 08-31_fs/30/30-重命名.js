// fs
const { log } = require('console');
const fs = require('fs');

// 循环创建文件
for (let i = 0; i <= 10; i++) {
    // 写入文件
    if (i !== 2) {
        fs.writeFileSync(__dirname + `/text/${i}.text`, `${i}`)
    }
}

// 读取文件
const files = fs.readdirSync(__dirname + '/text');
// console.log(files);

// // 循环重命名
files.forEach((item, index) => {
    let data = item.split('.');
    let [num, type] = data;

    // 缺少 2, 把 3 变成 2, 4 变成 3
    if (num > 2) {
        num--;
    }
    num = num < 10 ? '0' + num : num;

    // console.log(num);

    // 创建新的文件名
    let newFileName = `${num}.${type}`;
    // console.log(newFileName);

    // 重命名
    fs.renameSync(__dirname + `/text/${item}`, __dirname + `/text/${newFileName}`);
})

const newFiles = fs.readdirSync(__dirname + '/text');
console.log(newFiles);