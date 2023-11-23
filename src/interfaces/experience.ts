import { Document } from "mongoose";

export interface IExperience extends Document {
    user_id: string;
    employer: string;
    title: string;
  }