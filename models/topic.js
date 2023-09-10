import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title Must be Provided, can't be empty"]
    },
    description: {
      type: String,
      required: [true, "Description Must be Provided, can't be empty"]
    },
    images: [{
      type: String,
      required: [true, "Image must be provided"],
    }],
    
    price: {
      type: Number,
      required: [true, "Enter Price, it can't be empty"]
    },
    stock: {
      type: Number,
      required: [true, "Enter Stock, it can't be empty"]
    },
    discount: {
      type: Number,
    },
    offers: {
      type: String
        },
    category: {
      type: String,
      required: [true, "Category Must be Provided, can't be empty"],
      enum: {
        values: [  "Supplements",  "Equipment", "Footwear", "Nutrition"]
      }
    },
    brand: {
      type: String,
      required: [true, "Brand Must be Provided, can't be empty"]
    },
    seller: {
      type: String,
      required: [true, "Seller Must be Provided, can't be empty"]
    },
    size: {
      type: Number,
      
    },
  
     model:{
      type: String,
      required:false
     },
 
    ratings: {
      type: Number,
     
      required: false
    },
    
 
    tags: {
      type: String,
      enum: ["new Arrival", "Popular", "oldest Arrival","Months Trending","Assured"]
    },
    legalDisclaimer: {
      type: String,
      required: false,
    },

    manufacturingInfo: {
      type: String,
      required: false, 
    },
    dateAdded: {
      type: Date,
      default: new Date()
    }
  },
  {
    timestamps: true,
  }
);
const Topic = mongoose.models.TopicCollection || mongoose.model("TopicCollection", topicSchema);

 

export default Topic;




// reviews: [{ user: String, text: String }],
// ratings: {
//   type: Number,
//   
//   required: false
// },




