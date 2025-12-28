import mongoose from "mongoose";
import { Schema } from "mongoose";

const likeSchema = new mongoose.Schema({
    content:{
        type:String, 
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    // comment:{
    //     type:Schema.Types.ObjectId,
    //     ref:"Comments"
    // },
    // tweet:{
    //     type:Schema.Types.ObjectId,
    //     ref:"Tweet"
    // }
}, {timestamps:true})

export const Like = mongoose.model("Like" , likeSchema);