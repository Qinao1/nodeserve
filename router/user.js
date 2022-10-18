const express=require('express')
const router= express.Router()


// 导入用户路由处理函数的对应模块
const userhandler=require('../router_handler/user')
// 注册新用户
router.post('/reguser',userhandler.resUser)
// 登录
router.post('/login',userhandler.login)


module.exports=router