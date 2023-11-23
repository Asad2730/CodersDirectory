import { Schema, model } from "mongoose";
import { ICertificates } from "../interfaces/certificates";

const CertificatesSchema = new Schema<ICertificates>({
    user_id: { type: String,  },
    name: { type: String, required: true },
    description: { type: String, required: true },
  });
  
  const Certificates = model<ICertificates>('Certificates', CertificatesSchema);

  export default Certificates;