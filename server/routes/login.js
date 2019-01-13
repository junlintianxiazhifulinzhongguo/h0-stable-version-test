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
  access_token,
  user_info
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
        // const auth_code = '5268dd2fb0214e51824377435dd6QX57'
        // const { access_token,alipay_user_id,expires_in,re_expires_in,refresh_token,user_id } = await access_token(auth_code)
        // const result = await user_info(access_token)
        // console.log(result)  
        // ctx.body = {
        //     result
        // }
        ctx.body = {
            app_id,source,scope,auth_code
        }
    }   
}