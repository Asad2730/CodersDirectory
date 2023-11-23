import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user';


const UserSchema = new Schema<IUser>({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    dob:{type:String,required:true},
    gender:{type:String,required:true},
    job_title:{type:String,required:true},
    email:{type:String,required:true},
    profile_summary:{type:String,required:true},
    phone:{type:String,required:true},
})

const User = model<IUser>('User',UserSchema)


export default User