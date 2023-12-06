import { Request,Response } from 'express';
import Experience from '../models/experience';


export const createExperience = async(req:Request,res:Response) => {

    try{
        const item =  new Experience(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getExperience = async(req:Request,res:Response) => {

    try{
        const items = await Experience.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getExperienceByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Experience.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateExperience = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Experience.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteExperience = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Experience.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 