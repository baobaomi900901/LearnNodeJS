// 导入 http 模块
const http = require('http');
const server = http.createServer((req, res) => { // req: 请求对象, res: 响应对象
    console.log('--------')
    // 获取请求方法
    console.log('请求方法 :>>', req.method); // GET
    // 获取请求地址
    console.log('请求地址 :>>', req.url); // /search?keyword=1&num=1, 只包含路径与查询字符串
    // 获取 http 协议版本
    console.log('请求http协议 :>>', req.httpVersion); // 1.1, 几乎不用
    // 获取请求头
    console.log('请求头 :>>', req.headers); // 对象, 键值对, 键是小写, 值是字符串
    console.log('请求头.host :>>', req.headers.host); // 获取请求头中的 host 字段
    console.log('请求头.accept-language :>>', req.headers['accept-language']);

    console.log('--------')
    //设置响应头, utf-8 解决乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('你好, HTTP Server!');
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
