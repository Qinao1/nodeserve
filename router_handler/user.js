// 注册新用户的处理函数
exports.resUser=(req,res)=>{
    // 获取客户端提交到服务器的用户信息
    const userinfo=req.body
    // 对表单中的数据，进行合法性的校验
    if(!userinfo.username || !userinfo.password){
        return res.send({status:1 ,message:'用户名或密码，不合法'})
    }
    console.log(userinfo);
    
    res.send('reguser OK')
}
// 登录的处理函数
exports.login=(req,res)=>{
    res.send('login OK')
}