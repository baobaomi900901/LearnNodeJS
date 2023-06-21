// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer((req, res) => {
    // req = request 是请求对象，包含了请求报文中的内容
    // res = reponse 是响应对象，包含了响应报文中的内容

    res.setHeader('Content-Type', 'text/html;charset=utf-8'); // 设置响应头, 解决中文乱码问题
    // 服务端接收到请求后，返回响应
    res.end('Hello HTTP Server! 宝宝米'); // end 方法用于返回响应内容
});

// 监听端口, 启动服务
server.listen(9000, () => {
    console.log("服务已经启动!");
});

// HTTP 默认端口号是 80, 游览器中不显示端口号
// HTTPS 默认端口号是 443, 游览器中不显示端口号
// 服务开发常用端口有: 3000, 5000, 8000, 9000, 8080, 8081, 8088, 8090, 8099, 8888, 9999