const fs = require('fs');

fs.rename('./1_文件写入.text', '../资料/1_文件写入-重命名.text', err => {
    if (err) {
        console.log('重命名失败')
        return;
    }
    console.log('重命名成功')
})