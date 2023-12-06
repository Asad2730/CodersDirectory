import { Request,Response } from 'express';
import Location from '../models/location';



export const createLocation = async(req:Request,res:Response) => {

    try{
        const item =  new Location(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getLocation = async(req:Request,res:Response) => {

    try{
        const items = await Location.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getLocationByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Location.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateLocation = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Location.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteLocation = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Location.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 