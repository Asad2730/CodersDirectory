import { Document } from "mongoose";

export interface IInterest extends Document {
    user_id: string;
    name: string;
    description: string;
  }