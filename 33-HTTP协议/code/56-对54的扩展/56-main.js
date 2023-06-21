// 搭建一个 http 服务, 响应一个4 行3 列的表格, 并且表格有隔行换色的效果, 且点击单元格能高亮

// 导入 http 模块
const http = require('http');
const fs = require('fs');
const { log } = require('console');

// 创建 http 服务器
const server = http.createServer((req, res) => {

    // TODO: 待完成三个响应体


    // console.log(req.headers);

    let { pathname } = new URL(req.url, `http://127.0.0.1`);
    log(pathname)
    if (pathname === '/') {
        let dom = fs.readFileSync(__dirname + '/dom.html');
        res.end(dom)
    }
    else if (pathname === '/style.css') {
        let style = fs.readFileSync(__dirname + '/style.css');
        res.end(style)
    }
    else if (pathname === '/script.js') {
        let script = fs.readFileSync(__dirname + '/script.js');
        res.end(script)
    }
    else {
        res.statusCode = 404;
        res.end('404')
    }
});

// 启动服务器
server.listen(9000, () => {
    console.log("服务已经启动!");
})