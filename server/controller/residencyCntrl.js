import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'

export const createRes = asyncHandler(async (req,res)=>{
    let {title,description,price,address,city,country,image,facilities,userEmail} = req.body.data;
    // console.log(req.body.data);
    try{
        const residency = await prisma.residency.create({
            data:{
                title,description,price,address,city,country,image,facilities,
                owner:{connect:{email:userEmail}}
            }
        })
        res.status(201).send({
            message:"Residency is created",
            data:{residency}
        })
    }catch(err){
        if(err.code ==='P2002'){
            res.status(401).send({message:"the residency with this addresss already exists"});
        }
        throw new Error(err.message);
    }
})

export const getRes = asyncHandler(async (req,res)=>{
    try{
       let residencies = await prisma.residency.findMany({orderBy:{
        createdAt:"desc"
    }});
    res.send(residencies); 
    }catch(err){
        throw new Error(err.message);
    }
})

export const getResById = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    try{
        let residency = await prisma.residency.findUnique({where:{id:id}});
        res.send(residency);
    }catch(err){
        throw new Error(err.message);
    }
})
