import { Request,Response } from 'express';
import SkillsLanguage from '../models/skillsLanguage';



export const createSkillsLanguage = async(req:Request,res:Response) => {

    try{
        const item =  new SkillsLanguage(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getSkillsLanguage = async(req:Request,res:Response) => {

    try{
        const items = await SkillsLanguage.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getSkillsLanguageByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await SkillsLanguage.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateSkillsLanguage = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await SkillsLanguage.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteSkillsLanguage = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await SkillsLanguage.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 