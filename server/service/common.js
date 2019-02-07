import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const checkIsRegisterBythirdpart = async (thirdpart,id) => {
   console.log(thirdpart)
   console.log(id)
   const result = await Administrators.find({ 'alipayUserId' : id})
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