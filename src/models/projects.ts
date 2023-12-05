import { Schema, model } from "mongoose";
import { IProjects } from "../interfaces/projects";

const ProjectsSchema = new Schema<IProjects>({
  user_id: [{ type: Schema.Types.ObjectId, ref:'User' }],
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    url: { type: String, required: true },
  });
  
  const Projects = model<IProjects>('Projects', ProjectsSchema);

  export default Projects;