import {  Document } from 'mongoose';

export interface IUser extends Document {
   name:string;
   age:Number;
   dob:string;
   job_title:string;
   email:string;
   profile_summary:string;
   gender:string;
   phone:string;
}