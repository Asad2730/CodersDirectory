import { Request,Response } from 'express';
import Organizations from '../models/orginization';




export const createOrganization = async(req:Request,res:Response) => {

    try{
        const item =  new Organizations(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getOrganization = async(req:Request,res:Response) => {

    try{
        const items = await Organizations.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getOrganizationByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Organizations.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateOrganization = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Organizations.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteOrganization = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Organizations.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 