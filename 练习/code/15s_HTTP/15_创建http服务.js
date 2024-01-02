// 导入http模块
const http = require('http');

// 创建http服务
const server = http.createServer((request, response) => {
    // request: 请求对象, 可以获取客户端的一些请求信息, 例如请求路径
    response.setHeader('Content-Type', 'text/html;charset=utf-8'); // 设置响应头, 解决乱码

    // 获取请求方法
    // console.log(request.method);

    // 获取请求地址
    // console.log(request.url); // 只包含路径, 不包含协议, 主机名, 端口号

    // 获取协议版本号
    // console.log(request.httpVersion);

    // 获取请求头
    console.log(request.headers);

    response.end('hello world'); // 设置响应内容
});

// 监听端口号
// 80端口号是默认端口号, 可以省略
// 443端口号是 https 的默认端口号
// 3000
// 8080
// 8090
// 9000
server.listen(80, () => {
    console.log('服务器启动成功...');
});
