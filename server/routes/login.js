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
        const result = auth_url
        ctx.body = {
            result
        }
    }

    @get("/authRedirect")
    getAlipayAuthUrlById(ctx,next)
    {
        const result = ctx.query
        ctx.body = {
            result,
            "name":"111"
        }
    }   
}