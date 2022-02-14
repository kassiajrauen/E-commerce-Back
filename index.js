import express, {json} from 'express';
import {MongoClient} from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import joi from 'joi';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
    db = mongoClient.db("projeto_14_ecommerce");
});

const server = express();
server.use(json());
server.use(cors());

server.post("/login", async (req, res) => {
    const user = req.body;
    
    const loginSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    
    const validate = loginSchema.validate(user);
    
    if(validate.error){
        return res.sendStatus(422);
    }

   try{
    const exist = await db.collection("users").findOne(user);
         if(!exist){
            res.sendStatus(401);
         }

    const entry = await db.collection("users").insertOne(user);
        if(entry){
            res.sendStatus(200)
            return;
        }else(
            res.sendStatus(401)        
        )
   }
    catch(error){
        res.sendStatus(500);
    };
})

server.post("/sign-up", async (req, res) => {
	const user = req.body;
	
	 const userSchema = joi.object({
	 	name: joi.string().required(),
	 	email: joi.string().email().required(),
	 	password: joi.string().required(),
	});

	 const validate = userSchema.validate(user);

	 if(validate.error){
	 	return res.sendStatus(422);
	 }

	try{
    
    const exist = await db.collection("users").findOne(user);
    if(exist){
        return res.sendStatus(409);
    }	
	
	await db.collection("users").insertOne(user);

	res.sendStatus(201);
	} catch(error) {
		res.sendStatus(500);
	}
})

server.get("/home", async (req, res) => {
    try{
        const historic = await db.collection("historic").find({}).toArray();
            if(historic){
                res.sendStatus(400, historic);
            }
    }
    catch(error) {
    res.sendStatus(500);
    }

})

//server.listen(5000);
