import {  Document } from 'mongoose';

export interface ILocation extends Document {
    user_id: string;
    parent_id: string;
    city: string;
    country: string;
    start_Date: string;
    end_Date: string;
    is_present: boolean;
    description: string;
  }