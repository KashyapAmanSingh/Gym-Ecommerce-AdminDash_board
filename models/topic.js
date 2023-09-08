import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.TopicCollection || mongoose.model("TopicCollection", topicSchema);

export default Topic;





