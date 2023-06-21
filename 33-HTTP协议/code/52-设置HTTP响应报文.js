// 1.导入 http 模块
const http = require('http');

// 2.创建 http 服务器
const server = http.createServer((req, res) => {

    // 设置响应报文
    // 设置响应状态码
    res.statusCode = 200; // 默认 200

    // 设置响应状态描述
    res.statusMessage = "OJBK"; // 默认 与状态码对应的描述

    // 设置响应头, 接收两个参数
    // res.setHeader('Content-Type', 'text/html;charset=utf-8'); // 默认 text/plain
    res.setHeader('X-Powered-By', ["a", "b", "c"]); // 设置多个同名响应头

    // 设置响应体
    res.write('Hello HTTP Server!');
    res.end(); // .end() 必须且只有一个
});

// 3.启动服务器
server.listen(9000, () => {
    console.log("服务已经启动!");
});
