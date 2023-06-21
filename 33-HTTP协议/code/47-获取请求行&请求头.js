// 导入 http 模块
const http = require('http');


const server = http.createServer((req, res) => {
    // 获取请求方法
    console.log(req.method); // GET
    // 获取请求地址
    console.log(req.url); // /search?keyword=1&num=1, 只包含路径与查询字符串
    // 获取 http 协议版本
    console.log(req.httpVersion); // 1.1, 几乎不用
    // 获取请求头
    // console.log(req.headers); // 对象, 键值对, 键是小写, 值是字符串
    console.log(req.headers.host);

    res.end('Hello HTTP Server!');
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
