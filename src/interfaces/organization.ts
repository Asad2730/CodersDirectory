import { Document } from "mongoose";


export interface IOrganizations extends Document {
    user_id: string;
    name: string;
    role: string;
  }