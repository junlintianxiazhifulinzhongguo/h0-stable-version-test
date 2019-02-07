import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const checkIsRegisterBythirdpart = async (thirdpart,id) => {
   console.log(thirdpart)
   console.log(id)
   
   switch(thirdpart)
   {
        case 'alipayUserId':
            const result = await Administrators.find({ 'alipayUserId' : id})
            return result;
        case 'qqUserId':
            result = await Administrators.find({ 'qqUserId' : id})
            return result;
        default:
            result = await Administrators.find({ 'wechatUserId' : id})
            return result;    
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