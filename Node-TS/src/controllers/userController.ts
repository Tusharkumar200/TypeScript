import { NextFunction, Request, Response } from "express";


export const getUsers = (req: Request , res: Response, next:NextFunction)=>{
    const users:string[] = ['A','B','C','D'];

    
    res.send('Hello World tushar');
    
}