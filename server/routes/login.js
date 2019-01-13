import { 
    controller,
    get,
    post,
    put,
    del,
    use,
    all
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

    @get("/authRedirect")
    async getAlipayAuthUrlById(ctx,next)
    {
        // www.junlintianxiazhifulinzhongguo.top/api/v0/login/authRedirect?app_id=2018123062714467&source=alipay_wallet&scope=auth_user&auth_code=05cfa47b90104c9eae6d760c983dOX57
        const { app_id,source,scope,auth_code } = ctx.query
        console.log(auth_code)
        // const { access_token,alipay_user_id,expires_in,re_expires_in,refresh_token,user_id } = await access_token(auth_code)
        // const result = await getUserInfo(access_token)
        // const [ accessToken,alipayUserId,expiresIn,reExpiresIn,refreshToken,userId ] = await access_token(auth_code)
        const { access_token } = await getAccessToken(auth_code)
        // console.log(result)  
        // ctx.body = {
        //     result
        // }
        ctx.body = {
            access_token
        }
    }   
}