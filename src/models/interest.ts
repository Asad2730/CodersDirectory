import { Schema, model } from "mongoose";
import { IInterest } from "../interfaces/interest";

const InterestSchema = new Schema<IInterest>({
  user_id: [{ type: Schema.Types.ObjectId, ref:'User' }],
    name: { type: String, required: true },
    description: { type: String, required: true },
  });


  const Interest = model<IInterest>('Interest',InterestSchema)

  export default Interest;