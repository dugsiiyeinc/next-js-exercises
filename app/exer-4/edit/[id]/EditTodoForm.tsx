'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { updateTodoAction } from '../../actions/update'
import { TodoType } from '@/app/types/todo'
import { timeAgo } from '@/app/lib/time'

type EditTodoFormProps = {
    todo: TodoType
  }

export default function EditTodoForm({ todo}:EditTodoFormProps) {
  const [state, formAction] = useActionState(updateTodoAction, null)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Todo</h1>
        <Link href="/" className="text-blue-600">← Back</Link>
      </div>
      <div>
        {todo.updatedAt && (
  <p className="text-xs text-gray-400 text-right">
    Updated {timeAgo(todo.updatedAt)}
  </p>
)}

      </div>

      <form action={formAction} className="space-y-4">
        <input type="hidden" name="id" value={todo._id} />

        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Todo Title
        </label>
        <input
          name="title"
          defaultValue={todo.title}
          placeholder="Enter your todo..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {state?.error && (
          <p className="text-red-500 text-sm">{state.error}</p>
        )}
        <div >
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Select priority
            </label>
            <select 
                name='priority'
                defaultValue={todo.priority}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <button className="flex-1 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
          Update Todo
        </button>
      </form>
    </div>
  )
}
