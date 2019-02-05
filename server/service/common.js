import mongoose from 'mongoose'
const Administrators = mongoose.model("Administrators");
const checkIsRegisterBythirdpart = async (id,thirdpart) => {
   const thirdpartId = thirdpart + 'UserId'
   const result = await Administrators.find({ thirdpartId : id})
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