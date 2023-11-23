import { Schema, model } from 'mongoose';
import { ISocial } from '../interfaces/social';

const SocialSchema = new Schema<ISocial>({
    user_id: { type: String, },
    name: { type: String, required: true },
    url: { type: String, required: true },
  });
  
  const Social = model<ISocial>('Social', SocialSchema);

  export default Social;