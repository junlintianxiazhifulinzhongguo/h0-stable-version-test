import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const checkIsRegisterBythirdpart = async (thirdpart,id) => {
   console.log(thirdpart)
   console.log(id)
   const result
   switch(thirdpart)
   {
        case 'alipayUserId':
            result = await Administrators.find({ 'alipayUserId' : id})
            break;
        case 'qqUserId':
            result = await Administrators.find({ 'qqUserId' : id})
            break;
        default:
            result = await Administrators.find({ 'wechatUserId' : id})    
   }
   console.log(result)
   if (result)
   {
       return true
   }
   else
   {
       return false
   }
}

export{
    checkIsRegisterBythirdpart
}