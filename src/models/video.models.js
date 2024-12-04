import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile: {
        type: String,
        
    },
    thumbnail: {
        type: String,
        require: true,    

    },
    Title: {
        type: String,
        require: true,
      
    },
    Description: {
        type: String, 
        require: true,

    },
    duration: {
        type: Number, //cloudinary url
        required : true    

    },
    views: {
        type: Number,
        default : 0
    },
    isPublished: {
        type: Boolean,
        default : true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref : "User",
        required: true

    },
   
}, { timestamps: true })



videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)