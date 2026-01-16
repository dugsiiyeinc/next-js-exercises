'use server'

import { getTodoCollection } from '../lib/db'
import { revalidatePath } from 'next/cache'

export async function deleteAllTodos() {
  const collection = await getTodoCollection()

  await collection.deleteMany({})

  revalidatePath('/')
}
