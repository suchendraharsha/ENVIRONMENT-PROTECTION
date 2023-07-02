import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    users: {
        type: mongoose.ObjectId,
        ref: "users",
       
      },
      activity: {
        type: mongoose.ObjectId,
        ref: "activity",
       
      },
    description:{
        type:String,
        required:true
    },
},
{timestamps:true}
);
export default mongoose.model('comment',commentSchema);