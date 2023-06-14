// Buffer
// 1. alloc - 分配

// let buf1 = Buffer.alloc(10); // 10个字节的buffer
// console.log(buf1);

// 2. allocUnsafe - 分配不安全, 有可能包含旧的内存数据
// let buf2 = Buffer.allocUnsafe(10000); // 10个字节的buffer
// console.log(buf2);


// 3. from - 从字符串或者数组创建buffer. 来自于
let buf3 = Buffer.from('hello');
let buf4 = Buffer.from([111, 2, 3, 4, 5]);
console.log(buf4);