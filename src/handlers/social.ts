import { Request,Response } from 'express';
import Social from '../models/social';

export const createSocial = async(req:Request,res:Response) => {

    try{
        const item =  new Social(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getSocial = async(req:Request,res:Response) => {

    try{
        const items = await Social.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getSocialByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Social.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateSocial = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Social.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteSocial = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Social.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 