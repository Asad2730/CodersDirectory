import { Request,Response } from 'express';
import Certificates from '../models/certificates';


export const createCertification = async(req:Request,res:Response) => {

    try{
        const item =  new Certificates(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getCertification = async(req:Request,res:Response) => {

    try{
        const items = await Certificates.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getCertificationByUID = async(req:Request,res:Response) => {

    try{
        const { uid } = req.params;
        const item =  await Certificates.find({user_id:uid}).populate('user_id');
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateCertification = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Certificates.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteCertification = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await Certificates.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


 