import mongoose from "mongoose";

const activityRegistrationSchema = new mongoose.Schema({
    users: {
        type: mongoose.ObjectId,
        ref: "users",
        required: true,
      },
      activity: {
        type: mongoose.ObjectId,
        ref: "activity",
        required: true,
      },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
},
{timestamps:true}
);
export default mongoose.model('activityRegistration',activityRegistrationSchema);