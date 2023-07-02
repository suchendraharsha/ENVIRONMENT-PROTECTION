import activityModel from "../models/activityModel.js";
import activityRegistrationModel from "../models/activityRegistration.js";
import commentModel from "../models/commentModel.js";
import userModel from "../models/userModel.js";
export const CommentController=async(req,res)=>{
    try{
        const activity=req.params.id;
      const comment = await commentModel.find({activity:activity}).populate('users')
      res.status(200).send({
        success:true,
        message:"All comment",
        comment,
        /* countTotal:comment.length, */
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in getting comment",
      });
    }
};

export const GetAllCommentController = async(req,res)=>{
  try{
    const comment = await commentModel.find({}).sort({createdAt:-1}).populate("users");
    res.status(200).json(comment);
} catch(err){
    console.log(err);
    res.status(500).send({err});
}
}
export const CreateCommentController = async(req,res)=>{
    try{
        /* const {users} = req.params; */
        const {userId,activity,description} = req.body;
        const user = await userModel.find({_id:userId});
        if(!user) return res.status(400).json("user not registered to activity");
        const comment = await commentModel.create({users:userId,activity,description});
        res.status(200).json(comment);
    } catch(err){
        console.log(err);
        res.status(500).send({err});
    }
};

export const deleteCommentController = async (req, res) => {
    try {
      await commentModel.findByIdAndDelete(req.params.cid);
      res.status(200).send({
        success: true,
        message: " activity registered comment",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting comment",
        error,
      });
    }
  };