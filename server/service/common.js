import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const checkIsRegisterBythirdpart = async (thirdpart,id) => {
   const result = await Administrators.find({ thirdpart : id})
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