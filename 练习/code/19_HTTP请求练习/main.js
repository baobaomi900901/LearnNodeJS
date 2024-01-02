const http = require('http');

const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 获取请求方法
    let { method } = request;
    // 获取url路径
    let { pathname } = new URL(request.url, `http://${request.headers.host}`);
    // console.log(method, pathname);

    // 判断请求方法
    if (method === 'GET' && pathname === '/login') {
        response.end('login page');
    } else if (method === 'GET' && pathname === '/register') {
        response.end('register page');
    } else {
        response.end('404 Not Found.');
    }
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
