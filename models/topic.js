import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
    image: String
  },
  {
    timestamps: true,
  }
);

// const Topic = mongoose.models.collecs || mongoose.model("collecs", topicSchema);

const Topic = mongoose.models.TopicCollection || mongoose.model("TopicCollection", topicSchema);

export default Topic;


