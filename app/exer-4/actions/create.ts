'use server'

import { revalidatePath } from "next/cache"
import { createTodo } from "../lib/todo"
import { redirect } from "next/navigation"

type State = {
  error?: string
}

export async function createTodoAction(
  prevState: State | null,
  formData: FormData
): Promise<State | null> {

  const title = formData.get('title') as string
  const priority=formData.get('priority') as string

  if (!title || title.trim().length === 0) {
    return { error: "Title is required" }
  }

  const todoId = await createTodo({ title: title.trim(),priority,completed:false, createdAt:new Date().toISOString(),updatedAt:new Date().toISOString() })

  if (!todoId) {
    return { error: "Failed to create todo" }
  }

  revalidatePath('/')
  redirect('/')
}
