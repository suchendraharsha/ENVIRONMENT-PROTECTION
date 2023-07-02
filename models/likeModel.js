import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    users: {
        type: mongoose.ObjectId,
        ref: "users",
      },
      comment: {
        type: mongoose.ObjectId,
        ref: "comment",
      },
    thumbsup:{
        type:Number,
    },
},
{timestamps:true}
);
export default mongoose.model('like',likeSchema);