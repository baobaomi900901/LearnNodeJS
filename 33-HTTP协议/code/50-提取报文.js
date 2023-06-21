const http = require('http');

const server = http.createServer((req, res) => {

    // let url = new URL("/search?a=100&b=200", "http://www.baidu.com");
    let url = new URL(req.url, "http://www.baidu.com");
    console.log(url.pathname); // /home
    console.log(url.searchParams.get('keyword')); // 5
    res.end('Hello New URL!');
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
