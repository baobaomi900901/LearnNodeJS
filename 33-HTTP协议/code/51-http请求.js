// 请求类型    请求地址    响应体结果
// GET        /login     登录
// GET        /reg       注册

// 1.导入 http 模块
const http = require('http');

// 2.创建 http 服务器
const server = http.createServer((req, res) => {

    // 4.获取请求方法
    let { method } = req;

    // 5.获取请求地址
    let { pathname } = new URL(req.url, "http://127.0.0.1");

    console.log(method, pathname); // GET

    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    if (method === "GET" && pathname === "/login") {
        res.end('Hello Login! 登录页面');
    }
    else if (method === "GET" && pathname === "/reg") {
        res.end('Hello Reg! 注册页面');
    } else {
        res.end('Not Found! 你访问的页面不存在!');
    }
});

// 3.启动服务器
server.listen(9000, () => {
    console.log("服务已经启动!");
});
