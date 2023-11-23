import {  Document } from 'mongoose';

export interface IEducation extends Document {
    user_id: string;
    name_of_institution: string;
    degree: string;
  }