import likeModel from "../models/likeModel.js";

export const LikeController=async(req,res)=>{
    try{
      const like = await likeModel.find({});
      res.status(200).send({
        success:true,
        message:"All like",
        like,
        countTotal:like.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in getting likes",
      });
    }
}; 

export const LikeUserController=async(req,res)=>{
    try{
      const uId = req.params.uId;
      const likes = await likeModel.find({users : uId},{_id:0,users:0,thumbsup:0,createdAt:0,updatedAt:0,__v:0});
      const like = likes.map((like) => like.comment);
      res.status(200).send({
        success:true,
        message:"All like",
        like,
        countTotal:like.length,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in getting likes",
      });
    }
}; 


export const CreateLikeController = async(req,res)=>{
    try{
        /* const {users} = req.params; */
        const {users,comment,thumbsup} = req.body;
        const like = await likeModel.create({users,comment,thumbsup});
        res.status(200).json(like);
    } catch(err){
        console.log(err);
        res.status(500).send({err});
    }
};
export const DeleteLikeController = async(req,res)=>{
    try {
      const lid=req.params.lid;
      const aid=req.params.uid;
        await likeModel.deleteOne({comment:lid,users:aid});
        res.status(200).send({
          success: true,
          message: " thumbsup has removed successfully",
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