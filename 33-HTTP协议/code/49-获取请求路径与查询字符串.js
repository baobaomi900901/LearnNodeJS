const http = require('http');

// 1. 导入 url 模块
const url = require('url');

const server = http.createServer((req, res) => {

    // 2.解析 parse
    // console.log(req.url); // home
    // let res1 = url.parse(req.url);
    // console.log(res1, res1.pathname); // pathname 就是路径

    // 查询字符串
    let res1 = url.parse(req.url, true);
    console.log(res1.query.keyword); // query 就是查询字符串

    res.end('Hello URL!');
});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
