import { ObjectId } from 'mongodb';
//import { stripHtml } from "string-strip-html";
import db from '../database.js';

export async function postRegistry(req, res) {

  //const user = res.locals.user;

  const registry = req.body;

//   registry.value = stripHtml(registry.value).result.trim();
//   registry.type = stripHtml(registry.type).result.trim();
//   registry.description = stripHtml(registry.description).result.trim();

  try {

    await db.collection("buys").insertOne({ ...registry, buyDate: Date.now()/*, userId: user._id */})
    
    res.status(201).send(registry);

  }
  catch {
    res.sendStatus(500)
  }
}
