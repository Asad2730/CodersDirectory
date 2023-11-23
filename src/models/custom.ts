import { Schema, model } from "mongoose";
import { ICustom } from "../interfaces/custom";

const CustomSchema = new Schema<ICustom>({
    user_id: { type: String, },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  });
  
  const Custom = model<ICustom>('Custom', CustomSchema);

  export default Custom;