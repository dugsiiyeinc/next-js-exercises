import { ObjectId } from "mongodb";
import { createTodoType, TodoType, updateTodoType } from "../types/todo";
import { getTodoCollection } from "./db";

export async function fetchTodos(search?: string,
    priority?: 'low' | 'medium' | 'high'):Promise<TodoType[]> {

    try{

       const collection=await getTodoCollection();

       const query: any = {};

       if (search) {
        query.title = { $regex: search, $options: 'i' }
      }
    
      if (priority) {
        query.priority = priority
      }

      const todos=await collection.find(query).sort({createdAt:-1}).toArray();

      return todos.map(todo=>({
         _id:todo._id.toString(),
         title:todo.title,
         priority:todo.priority,
         completed:todo.completed,
         createdAt:todo.createdAt?.toISOString(),
         updatedAt:todo.updatedAt instanceof Date 
            ? todo.updatedAt.toISOString()
            : todo.updatedAt
      }))
    }catch(err){
        console.error(`error fetching todos: `,err)
        return []
    }
    
}


export async function fetchTodoById(id:string):Promise<TodoType | null> {

    try{

       const collection=await getTodoCollection();

      const todo=await collection.findOne({_id:new ObjectId(id)});

      if(!todo) return null;

      return{
         _id:todo._id.toString(),
         title:todo.title,
         priority:todo.priority,
         completed:todo.completed,
         createdAt:todo.createdAt?.toISOString(),
         updatedAt:todo.updatedAt?.toISOString()
      }

    }catch(err){
        console.error(`error fetching todo by id: `,err)
        return null
    }
    
}

export async function createTodo(todo: createTodoType): Promise<string | null> {
    try {
      const collection = await getTodoCollection();
  
      const now = new Date();
  
      const result = await collection.insertOne({
        ...todo,
        createdAt: now,
        updatedAt: now,
      });
  
      return result.insertedId.toString();
    } catch (err) {
      console.error("error creating todo:", err);
      return null;
    }
}
  

export async function updateTodo(id:string, todo:updateTodoType):Promise<boolean> {

    try{

       const collection=await getTodoCollection();

      const result=await collection.updateOne({_id:new ObjectId(id)}, {$set:todo});

      return result.modifiedCount >0;

    }catch(err){
        console.error(`error updating todo: `,err)
        return false
    }
    
}

export async function deleteTodo(id:string):Promise<boolean> {

    try{

       const collection=await getTodoCollection();

      const result=await collection.deleteOne({_id:new ObjectId(id)});

      return result.deletedCount >0;

    }catch(err){
        console.error(`error deleting todo: `,err)
        return false
    }
    
}