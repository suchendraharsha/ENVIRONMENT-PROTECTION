import activityRegistrationModel from "../models/activityRegistration.js";
import userModel from "../models/userModel.js";

export const activityRegisterController = async(req,res)=>{
    try{
        /* const {users} = req.params; */
        const {userId,activity,email,contact} = req.fields;
        const user = await userModel.findById({_id:userId});
        if(!user) return res.status(400).json("user not found");
        let existingUser = await activityRegistrationModel.findOne({users:userId,activity:activity}).exec();
        

        console.log(existingUser);
        if(!existingUser){
          const activityUser = await activityRegistrationModel.create({users:userId,activity,email,contact});
        res.status(201).json(activityUser);
        }
        else{
        
         res.status(404).send({
         message:"user already registered",
        
        });
        }
    } catch(err){
        console.log(err);
        res.status(500).send({err});
    }
};
export const getAllRegisteredUsers = async(req,res)=>{
    try{
        const user = await activityRegistrationModel.find({}).populate("activity").populate("users");
        res.status(201).json(user);
    } catch(err){
        console.log(err);
        res.status(500).send({err});
    }
};
export const deleteActivityRegisterUserController = async (req, res) => {
    try {
      await activityRegistrationModel.findByIdAndDelete(req.params.rid);
      res.status(200).send({
        success: true,
        message: " activity registered user Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting activity register user",
        error,
      });
    }
  };

  export const GetActivityRegisterController=async(req,res)=>{
    try{
        const {activity}=req.body;
      const allRegisteredUsers = await activityRegistrationModel.find({activity:activity}).populate('users')
      res.status(200).send({
        success:true,
        message:"All activity",
        allRegisteredUsers,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in getting product",
      });
    }

};