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
    login(ctx,next)
    {
        ctx.body = {
            "name":"lijun1"
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
        await addUserByAlipay(resultInfo)
        const auth_redirect = 'http://www.junlintianxiazhifulinzhongguo.top/#/auth-redirect?auth-type=alipay&user_id=' + resultInfo.user_id
        ctx.redirect(auth_redirect)
    }   
}