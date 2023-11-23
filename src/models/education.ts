import  { Schema,model } from 'mongoose';
import { IEducation } from '../interfaces/education';


const EducationSchema = new Schema<IEducation>({
  user_id: { type: String,  },
  name_of_institution: { type: String, required: true },
  degree: { type: String, required: true },
});

const Education = model<IEducation>('Education', EducationSchema);

export default Education;