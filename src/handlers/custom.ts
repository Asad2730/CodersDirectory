import { Request,Response } from 'express';
import Custom from '../models/custom';


export const createCustom = async(req:Request,res:Response) => {

    try{
        const item =  new Custom(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getCustom = async(req:Request,res:Response) => {

    try{
        const items = await Custom.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getCustomByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item = await Custom.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateCustom = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Custom.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteCustom = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Custom.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 