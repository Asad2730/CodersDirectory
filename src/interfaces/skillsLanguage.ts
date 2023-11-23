import { Document } from "mongoose";

export interface ISkillsLanguage extends Document {
    user_id: string;
    name: string;
    sub_skill: string;
    level: string;
    language: string;
  }