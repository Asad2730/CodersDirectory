import {  Document } from 'mongoose';

export interface ISocial extends Document {
    user_id: string;
    name: string;
    url: string;
  }