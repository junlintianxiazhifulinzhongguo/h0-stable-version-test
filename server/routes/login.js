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
    getAlipayAuthUrlById(ctx,next)
    {
        const { app_id,source,scope,auth_code } = ctx.query
        access_token(auth_code) 
        ctx.body = {
            result,
            "name":"111"
        }
    }   
}