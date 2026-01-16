'use server'

import { getTodoCollection } from '../lib/db'
import { revalidatePath } from 'next/cache'

export async function completeAllTodos() {
  const collection = await getTodoCollection()

  await collection.updateMany(
    { completed: false },
    { $set: { completed: true } }
  )

  revalidatePath('/')
}
