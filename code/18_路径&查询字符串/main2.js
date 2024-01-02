/*
 * 查询路径与查询字符串的另一种方式 
 */
const http = require('http');

const server = http.createServer((request, response) => {

    // 1. 实例化 URL 对象
    let url = new URL(request.url, `http://${request.headers.host}`);
    // console.log('url :>> ', url);

    let pathname = url.pathname; // 1.获取路径
    console.log('pathname :>>', pathname);
    let keyword = url.searchParams.get('keyword'); // 2.获取查询字符串
    console.log('keyword :>>', keyword);

    response.end('hello world');

});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
