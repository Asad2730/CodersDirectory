import { Document } from "mongoose";

export interface IProjects extends Document {
    user_id: string;
    title: string;
    subtitle: string;
    url: string;
  }