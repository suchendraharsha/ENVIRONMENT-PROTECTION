import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    venue:{
        type:String,
        required:true,
    },
    day:{
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
export default mongoose.model('activity',activitySchema);