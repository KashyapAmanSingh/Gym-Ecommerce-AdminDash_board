import mongoose from "mongoose";

async function renameCollection() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
   
    const oldCollectionName = "TopicCollection";
    const newCollectionName = "ProductCollection";

    await db.collection(oldCollectionName).rename(newCollectionName);

    console.log(
      `Collection "${oldCollectionName}" renamed to "${newCollectionName}"`
    );
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
  }
}

renameCollection();
