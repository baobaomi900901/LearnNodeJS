// 操作 buffer
// let buf1 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf1.toString()); // utf-8

// 读写
// let buf2 = Buffer.from("hello")
// // console.log(buf2[0].toString(2)); // 01101000
// buf2[0] = 95;
// console.log(buf2);
// console.log(buf2.toString()); // _ello

// // 溢出
// let buf3 = Buffer.from("hello")
// buf3[0] = 361;
// console.log(buf3); // <Buffer e9 6c 6c 6f> // 舍弃高位数字


let buf4 = Buffer.from("你好")
console.log(buf4); // <Buffer e4 bd a0 e5 a5 bd>