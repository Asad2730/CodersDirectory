import { Request,Response } from 'express';
import Projects from '../models/projects';


export const createProject = async(req:Request,res:Response) => {

    try{
        const item =  new Projects(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getProjects = async(req:Request,res:Response) => {

    try{
        const items = await Projects.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getProjectByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Projects.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateProject = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Projects.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteProject = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Projects.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 