import { 
    controller,
    get,
    post,
    put,
    del,
    use,
    all,
    router
  } from '../lib/decorator'
import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators")
import {  
    auth_url,
    getAccessToken,
    getUserInfo
} from '../service/alipay'

import { 
    getToken, 
    addUserByAlipay
} from '../service/administrators'


@controller('/api/v0/login')
export class loginController
{
    @get("/")
    async login(ctx,next)
    {
        // const resultInfo = { code: '10000',
        //   msg: 'Success',
        //   avatar:'https://tfs.alipayobjects.com/images/partner/T1Ch8aXjJXXXXXXXXX',
        //   city: '成都市',
        //   gender: 'm',
        //   isCertified: 'T',
        //   isStudentCertified: 'F',
        //   nickName: '君临天下之福邻忠帼',
        //   province: '四川省',
        //   userId: '2088902939066578',
        //   userStatus: 'T',
        //   userType: '2' 
        // }
        // const a={ roles: ['admin'],
        //           token: "admin",
        //           introduction: "我是超级管理员", 
        //           avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", 
        //           name: "Super Admin"
        //         }
        // const result = await getToken('alipay',resultInfo.userId)
        console.log(111)
        const administrators = new Administrators({  
            name: 'admin', 
            password: '1111111',
            email: '2211672as8@qq.com'
        });
        console.log(222)
        await administrators.save();
        
        console.log(333)
        ctx.body = {
            "name":"lijun1",
            result 
        }
    }
    
    @get("/test")
    async getAuthUrl(ctx,next)
    {
        // const administrators = new Administrators({  
        //     name: 'admin', 
        //     password: '1111111',
        //     email: '2211672as8@qq.com',
        // });
        // await administrators.save();
        ctx.body = {
            auth_url
        }
    }
    @get("/alipay/authUrl")
    getAlipayAuthUrl(ctx,next)
    {
        ctx.body = {
            auth_url
        }
    }
    @get("/qq/authUrl")
    getAlipayAuthUrl(ctx,next)
    {
        ctx.body = {
            auth_url
        }
    }
    @get("/wechat/authUrl")
    getAlipayAuthUrl(ctx,next)
    {
        ctx.body = {
            auth_url
        }
    }
    @post("/getToken")
    async getToken(ctx,next)
    {
        console.log(ctx.request.body)
        const { type,value } = ctx.request.body
        console.log(type)
        console.log(value)
        const token = await getToken(type,value)
        ctx.body = {
            token
        }
    }
    @get("/getUserInfo")
    async getUserInfo(ctx,next)
    {
        const { token } = ctx.query
        const result = await getUserInfo(token)
        ctx.body = {
            result
        }
    }
    
    @get("/authRedirect")
    async getAlipayAuthUrlById(ctx,next)
    {
        const { app_id,source,scope,auth_code } = ctx.query
        const resultToken = await getAccessToken(auth_code)
        const resultInfo = await getUserInfo(resultToken.accessToken)
        const result = await addUserByAlipay(resultInfo)
        const auth_redirect = 'http://www.junlintianxiazhifulinzhongguo.top/#/auth-redirect?auth-type=alipay&user_id=' + result.alipayUserId
        ctx.redirect(auth_redirect)
    }   
}