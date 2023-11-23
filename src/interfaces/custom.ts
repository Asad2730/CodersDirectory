import { Document } from "mongoose";

export interface ICustom extends Document {
    user_id: string;
    name: string;
    icon: string;
    type: string;
    title: string;
    subtitle: string;
  }