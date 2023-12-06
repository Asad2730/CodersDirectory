import { Request,Response } from 'express';
import Education from '../models/education';


export const createEducation = async(req:Request,res:Response) => {

    try{
        const item =  new Education(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getEducation = async(req:Request,res:Response) => {

    try{
        const items = await Education.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getEducationByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Education.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateEducation = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Education.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteEducation = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Education.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 