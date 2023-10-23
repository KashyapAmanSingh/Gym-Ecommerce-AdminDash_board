import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title Must be Provided, can't be empty"],
    },
    description: {
      type: String,
      required: [true, "Description Must be Provided, can't be empty"],
    },
    images: [
      {
        type: String,
        required: [true, "Image must be provided"],
      },
    ],

    price: {
      type: Number,
      required: [true, "Enter Price, it can't be empty"],
    },
    stock: {
      type: Number,
      required: [true, "Enter Stock, it can't be empty"],
    },
    discount: {
      type: Number,
    },
    offers: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Category Must be Provided, can't be empty"],
      enum: {
        values: ["Supplements", "Equipment", "Footwear", "Nutrition", "Others"],
      },
    },
    subcategory: {
      type: String,
      required: [true, "subcategory Must be Provided, can't be empty"],
    },
    brand: {
      type: String,
      required: [true, "Brand Must be Provided, can't be empty"],
    },
    seller: {
      type: String,
      required: [true, "Seller Must be Provided, can't be empty"],
    },
    size: {
      type: Number,
    },

    model: {
      type: String,
      required: false,
    },

    ratings: {
      type: Number,
      required: false,
      default:0
    },
    is_featured: {
      type: Boolean,
    },
    tags: {
      type: String,
      enum: [
        "new Arrival",
        "Popular",
        "oldest Arrival",
        "Months Trending",
        "Assured",
        "Others",
      ],
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
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.ProductCollection ||
  mongoose.model("ProductCollection", productSchema);

export default Product;

// reviews: [{ user: String, text: String }],
// ratings: {
//   type: Number,
//
//   required: false
// },
