import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
    users: {
        type: mongoose.ObjectId,
        ref: "users",
      },
    comment: {
        type: mongoose.ObjectId,
        ref: "comment",
      },
    description:{
        type:String,
        required:true
    },
},
{timestamps:true}
);
export default mongoose.model('reply',replySchema);