// 导入 http 模块
const http = require('http');


const server = http.createServer((req, res) => {
    console.log('start--------')
    // 1.申明变量
    let body = '';
    // 2.监听 body 事件, 获取请求体数据
    req.on('data', chunk => {
        body += chunk;
    });

    // 3.绑定一个 end 事件
    req.on('end', () => {
        console.log(body);
        // 响应
        console.log('--------end')
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end('Hello HTTP Server!');
    });
    // !!! 这里需要使用 46.html 提交 form
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
