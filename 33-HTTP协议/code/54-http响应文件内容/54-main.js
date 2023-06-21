// 搭建一个 http 服务, 响应一个4 行3 列的表格, 并且表格有隔行换色的效果, 且点击单元格能高亮

// 导入 http 模块
const http = require('http');
const fs = require('fs');

// 创建 http 服务器
const server = http.createServer((req, res) => {

    // TODO: 待完成三个响应体

    // 读取文件内容
    let dom = fs.readFileSync('./dom.html');
    let style = fs.readFileSync('./style.css');
    let script = fs.readFileSync('./script.js');


    res.write(dom)
    res.write(style)
    res.write(script)
    res.end()
});

// 启动服务器
server.listen(9000, () => {
    console.log("服务已经启动!");
})