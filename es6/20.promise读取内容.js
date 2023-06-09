//1.引入fs模块
const fs = require('fs');

//2.调用方法读取文件
/* fs.readFile('./resource/姓名.md', (err,data)=>{
    //如果失败，则抛出错误
    if(err) throw err
    //如果没有出错，则输出内容
    console.log(data.toString());

}); */

//3.使用Promise封装
const P = new Promise(function(resolve,reject){
    fs.readFile('./resource/姓名.m',(err,data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data)
    })
})

P.then(function(value){
    console.log(value.toString());
},function(reason){
    console.error('读取失败')
})