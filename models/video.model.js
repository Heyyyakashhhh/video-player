import mongoose, { Schema } from "mongoose";
const videosSchema = new Schema({
  videoFile: { type: String, required: true },
  thumbnail: { type: String, required: true },
  disscription: { type: String, required: true },
  duration: { type: String, required: true },
  views: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true },
  owner: { type: Schema.Types.ObjectId, ref: "Owner" },
  title: { type: Number, required: true },
});
export const Videos = mongoose.model("Videos", videosSchema);
