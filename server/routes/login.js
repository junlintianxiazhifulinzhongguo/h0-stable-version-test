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
const Administrators = mongoose.model("Administrators");
import {  
    auth_url,
    getAccessToken,
    getUserInfo
} from '../service/alipay'

import {  
    addUserByAlipay
} from '../service/administrators'


@controller('/api/v0/login')
export class loginController
{
    @get("/")
    async login(ctx,next)
    {
        const resultInfo = { code: '10000',
          msg: 'Success',
          avatar:'https://tfs.alipayobjects.com/images/partner/T1Ch8aXjJXXXXXXXXX',
          city: '成都市',
          gender: 'm',
          isCertified: 'T',
          isStudentCertified: 'F',
          nickName: '君临天下之福邻忠帼',
          province: '四川省',
          userId: '2088902939066578',
          userStatus: 'T',
          userType: '2' 
        }
        const administrators = new Administrators({  
            name: resultInfo.nickName,
            avatar: resultInfo.avatar,
            email: '2211672s8@qq.com',
            alipayUserId: resultInfo.userId
        });
        await administrators.save();
        const resultOne =await Administrators.findOne({'alipayUserId':resultInfo.userId})
        const result =await Administrators.find({'alipayUserId':resultInfo.userId})
        console.log(resultInfo.nickName)
        console.log(resultInfo.avatar)
        console.log(resultInfo.userId)
        ctx.body = {
            "name":"lijun1",
            resultOne,
            result 
        }
    }
    
    @get("/authUrl")
    getAuthUrl(ctx,next)
    {
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
    @get("/getToken")
    getToken(ctx,next)
    {
        ctx.body = {
            roles:  ["admin"],
            token: "admin", 
            introduction: "我是超级管理员", 
            avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", 
            name: "Super Admin"
        }
    }
    @get("/authRedirect")
    async getAlipayAuthUrlById(ctx,next)
    {
        const { app_id,source,scope,auth_code } = ctx.query
        const resultToken = await getAccessToken(auth_code)
        const resultInfo = await getUserInfo(resultToken.accessToken)
        const result = await addUserByAlipay(resultInfo)
        console.log(12122121)
        console.log(result)
        console.log(result.alipayUserId)
        console.log(3131311331)
        const auth_redirect = 'http://www.junlintianxiazhifulinzhongguo.top/#/auth-redirect?auth-type=alipay&user_id=' + result.alipayUserId
        ctx.redirect(auth_redirect)
    }   
}