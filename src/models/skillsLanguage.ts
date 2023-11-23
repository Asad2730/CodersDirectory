import { Schema, model } from "mongoose";
import { ISkillsLanguage } from "../interfaces/skillsLanguage";

const SkillsLanguageSchema = new Schema<ISkillsLanguage>({
    user_id: { type: String,  },
    name: { type: String, required: true },
    sub_skill: { type: String, required: true },
    level: { type: String, required: true },
    language: { type: String, required: true },
  });
  
  const SkillsLanguage = model<ISkillsLanguage>('SkillsLanguage', SkillsLanguageSchema);

  export default SkillsLanguage;