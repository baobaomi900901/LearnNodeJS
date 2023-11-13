const fs = require('fs');

// 同步读取
// readFileSync 参数: 文件名&文件路径
const data = fs.readFileSync('./3_流式写入.text', 'utf8');
console.log(data.toString()); 