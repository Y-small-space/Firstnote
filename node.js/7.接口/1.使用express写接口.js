const express = require('express');
const app = express();
const cors = require('cors')

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp',(req,res)=>{
    //1.获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback;
    //2.得到要通过JSONP形式发送给客户端的数据
    const data = {name:'zs',age:22};
    //3.根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr =  `${funcName}(${JSON.stringify(data)})`;
    //4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
    res.send(scriptStr);
})

//一定要在路由前面配置cors中间件，从而解决接口跨域问题
app.use(cors());
//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

//导入路由模块
const router = require('./1.apiRouter');
//把路由模块，注册到app上
app.use('/api',router);


app.listen(8090,()=>{
    console.log('Express server running at http://127.0.0.1:8090');
})