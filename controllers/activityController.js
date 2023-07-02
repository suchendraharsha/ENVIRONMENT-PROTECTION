import activityModel from "../models/activityModel.js";
import fs from "fs";

export const ActivityController=async(req,res)=>{
        try{
          const activity = await activityModel.find({})
          res.status(200).json({activity
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
export const CreateActivityController = async (req, res) => {
    try {
      const { name, venue, day, contact} =
        req.body;
      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !venue:
          return res.status(500).send({ error: "Description is Required" });
        case !day:
          return res.status(500).send({ error: "Price is Required" });
        case !contact:
          return res.status(500).send({ error: "Category is Required" });
      }
  
      const activity = new activityModel({ ...req.body}).save();
      res.status(201).send({
        success: true,
        message: "activity Created Successfully",
        activity,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating activity",
      });
    }
  };
  export const deleteActivityController = async (req, res) => {
    try {
      await activityModel.findByIdAndDelete(req.params.pid);
      res.status(200).send({
        success: true,
        message: "activity Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting activity",
        error,
      });
    }
  };
  export const updateActivityController = async(req,res)=>{
    try{
        const {name,venue,day,contact} = req.body;
        const {id} = req.params;
        const activity = await activityModel.findByIdAndUpdate(id,{name,venue,day,contact},{new:true});
        res.status(200).send({
            success:true,
            message:"activity Updated Successfully",
            activity,
        });
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error While Updating"
        });
    };
};   