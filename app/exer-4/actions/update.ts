'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchTodoById, updateTodo } from "../lib/todo";

type State = {
    error?: string
  }

export async function updateTodoAction(prevState: State | null,formData: FormData):Promise<State | null> {


    const id=formData.get('id') as string;
    const title=formData.get('title') as string;
    const priority=formData.get('priority') as string;

    if(!title || title.trim().length===0) return {error:'title is required'};

    const existingTodo= await fetchTodoById(id);

    if(!existingTodo) return {error:'Todo not found'};

    const success=await updateTodo(id,{title:title.trim(),priority,updatedAt:new Date().toISOString(),})

    if(!success) return {error:'you have to update it or go back'}

    revalidatePath('/');
    redirect('/')
}