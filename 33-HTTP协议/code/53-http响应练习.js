// 搭建一个 http 服务, 响应一个4 行3 列的表格, 并且表格有隔行换色的效果, 且点击单元格能高亮

// 1.导入 http 模块
const http = require('http');

// 2.创建 http 服务器
const server = http.createServer((req, res) => {
    res.write(`
    <!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
                td {
                    padding: 20px 40px;
                }
                table, td{
                    border-collapse: collapse;
                }
                table tr:nth-child(2n) {
                    background-color: #ccc;
                }
            </style>
        </head>
        <body>
            <table border="1">
                <tr><td>1</td><td>2</td><td>3</td></tr>
                <tr><td>1</td><td>2</td><td>3</td></tr>
                <tr><td>1</td><td>2</td><td>3</td></tr>
                <tr><td>1</td><td>2</td><td>3</td></tr>
            </table>
            <script>
                let tds = document.querySelectorAll('td');
                tds.forEach(td => {
                    td.addEventListener('click', function () {
                        this.style.backgroundColor = 'red';
                    })
                })
            </script>
        </body>
    </html>
    `)

    res.end()
});

// 3.启动服务器
server.listen(9000, () => {
    console.log("服务已经启动!");
})