import { Schema, model } from 'mongoose';
import { ILocation } from '../interfaces/location';


const LocationSchema = new Schema<ILocation>({
    user_id: { type: String,  },
    parent_id: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    start_Date: { type: String, required: true },
    end_Date: { type: String, required: true },
    is_present: { type: Boolean, required: true },
    description: { type: String, required: true },
  });
  

  const Social = model<ILocation>('Location', LocationSchema);

  export default Social;