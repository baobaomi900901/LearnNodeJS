/**
 * 流式写入
 */
const fs = require('fs');

// 创建一个可写流
// 适合频次较高的场景
const ws = fs.createWriteStream('./3_流式写入.text');

// write() 可以写入数据
ws.write('锄禾日当午,\r\n');
ws.write('汗滴禾下土,\r\n');
ws.write('谁知盘中餐,\r\n');
ws.write('粒粒皆辛苦.\r\n');

// 关闭流
// ws.end();
ws.close();

console.log('程序执行完毕');