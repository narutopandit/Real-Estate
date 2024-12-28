import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'
import { createLogger } from 'vite'

//create user
export const createUser = asyncHandler(async (req, res) => {
    console.log('creating user');

    let { name, email } = req.body;

    let userExist = await prisma.user.findUnique({ where: { email: email } });

    if (!userExist) {
        let user = await prisma.user.create({ data: req.body });
        res.status(201).send({
            message: "user created!!!",
            user: user
        })
    } else {
        res.status(401).send({ message: "user already exists!!!" })
    }

});

//book the visits
export const bookedVist = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email, date } = req.body;

    let user = await prisma.user.findUnique({ where: { email } })
    try {
        if (user.bookedVisits.some((visit) => visit.id == id)) {
            res.status(404).send({ message: "this residency is already booked by you!!" });
        } else {
            await prisma.user.update({
                where: { email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            })
            res.send({ message: "Visit Booked sucessfully!!" });
        }

    } catch (err) {
        throw new Error(err.message);
    }
})

//show the all booking
export const allBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
        let user = await prisma.user.findUnique({ where: { email } });
        res.status(200).send(user.bookedVisits);
    } catch (err) {
        throw new Error(err.message);
    }

})

//cancel booking
export const cancelBook = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    try {
        let user = await prisma.user.findUnique({ where: { email } });
        let index = user.bookedVisits.findIndex((visit) => visit.id === id);
        if (index == -1) {
            res.status(401).json({ message: "The Booking not found" });
        } else {
            user.bookedVisits.splice(index, 1);
            await prisma.user.update({
                where: { email },
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            res.status(201).send({ message: "booking cancelled!!" });
        }
    } catch (err) {
        throw new Error(err.message);
    }
})

//add to fav 
export const addToFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;

    try {
        let user = await prisma.user.findUnique({ where: { email } });
        if (user.favResidenciesID.some((id) => id == id)) {
            await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: user.favResidenciesID.filter((id) => id !== id)
                }
            })
            res.json({ message: "Removed From fav" });
        } else {
            await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: { push: rid }
                }
            })
            res.status(201).json({ message: "Added in Fav" });
        }
    } catch (err) {
        throw new Error(err.message);
    }
})

//get all fav
export const getAllFav = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    try{
        let favRes = await prisma.user.findUnique({
            where:{email},
            select:{favResidenciesID:true}
        })
        res.status(200).json(favRes);
    }catch(err){
        throw new Error(err.message);
    }
})