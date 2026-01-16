'use server'

import { revalidatePath } from "next/cache";
import { deleteTodo } from "../lib/todo"
  
export async function deleteTodoActon( id:string) {

    if(!id){
        return
    }

    const sucess=await deleteTodo(id);

    if(!sucess){
        return
    }
    revalidatePath('/')
    
}