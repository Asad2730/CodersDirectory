import { Request,Response } from 'express';
import Interest from '../models/interest';



export const createInterest = async(req:Request,res:Response) => {

    try{
        const item =  new Interest(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getInterest = async(req:Request,res:Response) => {

    try{
        const items = await Interest.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getInterestByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Interest.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateInterest = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Interest.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteInterest = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Interest.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 