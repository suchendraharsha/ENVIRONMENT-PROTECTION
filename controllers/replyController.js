import replyModel from "../models/replyModel.js";


export const ReplyController=async(req,res)=>{
    try{
        const comment=req.params.reid;
      const reply = await replyModel.find({comment:comment}).populate("users");
      res.status(200).send({
        success:true,
        message:"All reply",
        reply,
        /* countTotal:reply.length, */
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in getting reply",
      });
    }
};

export const CreateReplyController = async(req,res)=>{
    try{
        /* const {users} = req.params; */
        const {users,comment,description} = req.body;
        const reply = await replyModel.create({users,comment,description});
        res.status(200).json(reply);
    } catch(err){
        console.log(err);
        res.status(500).send({err});
    }
};