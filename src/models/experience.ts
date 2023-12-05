import { Schema, model } from "mongoose";
import { IExperience } from "../interfaces/experience";


const ExperienceSchema = new Schema<IExperience>({
  user_id: [{ type: Schema.Types.ObjectId, ref:'User' }],
    employer: { type: String, required: true },
    title: { type: String, required: true },
  });
  
  const Experience = model<IExperience>('Experience', ExperienceSchema);

  export default Experience;