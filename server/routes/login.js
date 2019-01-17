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

@controller('/api/v0/login')
export class loginController
{
    @get("/")
    login(ctx,next)
    {
        ctx.body = {
            "name":"lijun"
        }
    }
    
    @get("/authUrl")
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
        // www.junlintianxiazhifulinzhongguo.top/api/v0/login/authRedirect?app_id=2018123062714467&source=alipay_wallet&scope=auth_user&auth_code=05cfa47b90104c9eae6d760c983dOX57
        const { app_id,source,scope,auth_code } = ctx.query
        // console.log(auth_code)
        // const { access_token,alipay_user_id,expires_in,re_expires_in,refresh_token,user_id } = await access_token(auth_code)
         
        // const [ accessToken,alipayUserId,expiresIn,reExpiresIn,refreshToken,userId ] = await access_token(auth_code)
        const result_token = await getAccessToken(auth_code)
        const result_Info = await getUserInfo(result_token.accessToken)
       // console.log(JSON.stringify(result_Info))
       // const result =JSON.stringify(result_Info)
        const result = `roles=admin&token=admin&avatar=https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&name=Super Admin`
        const auth_redirect = 'http://www.junlintianxiazhifulinzhongguo.top/#/auth-redirect?' + result
        console.log(result_Info)
        console.log(auth_redirect)
        ctx.redirect(auth_redirect)
        //console.log(5555)  
       // console.log(result)
        // console.log(result_Info)    
        
        
        // const result = {result_Info,roles:  ["admin"], token: "admin", introduction: "我是超级管理员", avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", name: "Super Admin"}
        // ctx.body = {
        //     result
        // }
    }   
}