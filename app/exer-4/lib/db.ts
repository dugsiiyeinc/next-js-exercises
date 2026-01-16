import {MongoClient, Db, Collection} from 'mongodb';

const uri=process.env.MONGO_URI;

if(!uri){
    throw new Error('MONGODB URI environment variable is not defined')
}

let client:MongoClient;
let db:Db;

export async function connectToDb(){

    if(!client){
        client=new MongoClient(uri as string);
        await client.connect();
        db=client.db('todo-app');
    }
    return {client,db}   
}

export async function getTodoCollection():Promise<Collection> {

    if(!db){
        const {db:database}=await connectToDb();
        return database.collection('todos');
    }
    return db.collection('todos');
}