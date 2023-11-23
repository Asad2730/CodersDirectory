import { Document } from "mongoose";

export interface ICertificates extends Document {
    user_id: string;
    name: string;
    description: string;
  }