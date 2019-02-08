import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const token= mongoose.Schema.Types.ObjectId ;
const  getToken = async (info) =>{
    let query = {}
    switch(info)
    {
        case 'name':
            query.name = info
            break
        case 'email':
            query.email = info
            break
        case 'alipay':
            query.alipayUserId = info
            break
        case 'wechat':
            query.wechatUserId = info
            break
        case 'qq':
            query.qqUserId = info
            break    
    }
    
    await Administrators.update(query,{$set:{token:token}})

    return result
}


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
    const isExistence = await Administrators.find({ 'alipayUserId':resultInfo.userId })
    console.log(isExistence)
    if (!isExistence.length)
    {
        const administrators = new Administrators({  
            name: resultInfo.nickName,
            avatar: resultInfo.avatar,
            email: '2211672s8@qq.com',
            alipayUserId: resultInfo.userId
        });
        await administrators.save();
    }  
    const result = await Administrators.findOne({'alipayUserId':resultInfo.userId})
    return result
}

export {
    getAll,
    getByUsername,
    addUserByAlipay
}