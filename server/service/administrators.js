import mongoose from 'mongoose'
import {  
    checkIsRegisterBythirdpart
} from './common'
const Administrators = mongoose.model("Administrators");
const getAll = async () =>{
    let query = {}
    const result =await Administrators.find(query)
    return result
}
const  getByUsername = async (username) =>{
    let query = {}
    if(username)
    {
        query.username = username
    }
    const result =await Administrators.find(query)
    return result
}
const  addUserByAlipay = async (resultInfo) =>{
    console.log(resultInfo)
    console.log(resultInfo.userId)
    const is_true = await checkIsRegisterBythirdpart('alipayUserId',resultInfo.userId)
    console.log(is_true,222)
    if(!is_true)
    {
        const administrators = new Administrators({  
            name: resultInfo.nickName,
            avatar: resultInfo.avatar,
            email: '2211672s8@qq.com',
            alipayUserId: resultInfo.userId
        });
        await administrators.save();
    }   
    const result =await Administrators.findOne({'alipayUserId':resultInfo.userId})
    return result
}
export {
    getAll,
    getByUsername,
    addUserByAlipay
}