// 导入 http 模块
const http = require('http');
// 1.导入url模块
const url = require('url');


const server = http.createServer((request, response) => {
    // 2.解析url
    // console.log(request.url);

    let res = url.parse(request.url, true); // true 表示把查询字符串转成对象
    console.log(res);

    // 路径
    let pathname = res.pathname;
    console.log('pathname :>>', pathname);

    // 获取查询字符串
    let keyword = res.query.keyword;
    console.log('keyword :>>', keyword);

    response.end('hello world');

});

server.listen(9000, () => {
    console.log("服务已经启动!");
});
