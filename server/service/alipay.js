const AlipaySdk = require('alipay-sdk').default
import fs from 'fs'
import { resolve }from 'path'
import config  from '../config'
const alipaySdk = new AlipaySdk({
    url: config.alipay.URL,
    appId: config.alipay.APPID,
    privateKey: fs.readFileSync(resolve(__dirname,'../config/key/alipay/rsa_private_key.pem'), 'utf-8'),
    alipayPublicKey: fs.readFileSync(resolve(__dirname,'../config/key/alipay/alipay_public_key.pem'), 'ascii'),
    format: config.alipay.FORMAT,
    charset: config.alipay.CHARSET,
    signType: config.alipay.SIGN_TYPE,
    timestamp: config.alipay.TIMESTAMP,
    version: config.alipay.VERSION
})

const auth_url= `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=` + config.alipay.APPID +`&scope=auth_user&redirect_uri=` + config.alipay.Redirect_uri

const access_token =async (alipaySdk,auth_code)=>{
    try {
        const result = await alipaySdk.exec('alipay.system.oauth.token', {
        grantType: 'authorization_code',
        code: auth_code
        }, {
            validateSign: true,
            log: this.logger,
        });
        console.log(result);
    } catch (err) {
            console.log(err)
    }
}

const user_info = async (alipaySdk,access_token) => {
    try {
        const result = await alipaySdk.exec('alipay.user.info.share', {
        auth_token: auth_token
        }, {
            validateSign: true,
            log: this.logger,
        });
        console.log(result);
    } catch (err) {
            console.log(err)
    }
}

export{
    auth_url,
    access_token,
    user_info
}