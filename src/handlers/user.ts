import { Request,Response } from 'express';
import User from '../models/user';

export const createUser = async(req:Request,res:Response) => {

    try{
        const item =  new User(req.body);
        await item.save();
        res.status(201).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const getUsers = async(req:Request,res:Response) => {

    try{
        const items = await User.find();
        res.status(200).json(items);
    }catch(error){
       res.status(500).json(error);
    }
}

export const getUserById = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await User.findById(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const updateUser = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await User.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}


export const deleteUser = async(req:Request,res:Response) => {

    try{
        const { id } = req.params;
        const item = await User.findByIdAndDelete(id);
        res.status(200).json(item);
    }catch(error){
       res.status(500).json(error);
    }
}

