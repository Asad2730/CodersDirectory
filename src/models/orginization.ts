import { Schema, model } from "mongoose";
import { IOrganizations } from "../interfaces/organization";

const OrganizationsSchema = new Schema<IOrganizations>({
  user_id: [{ type: Schema.Types.ObjectId, ref:'User' }],
    name: { type: String, required: true },
    role: { type: String, required: true },
  });
  
  const Organizations = model<IOrganizations>('Organizations', OrganizationsSchema);

  export default Organizations;