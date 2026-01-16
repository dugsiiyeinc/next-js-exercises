export const dynamic = 'force-dynamic'


import Link from 'next/link';
import { fetchTodos } from '../lib/todo';
import { completeAllTodos } from '../actions/complete-all';
import { deleteAllTodos } from '../actions/delete-all';
import { toggleTodo } from '../actions/toggle';
import { timeAgo } from '../lib/time';
import { deleteTodoActon } from '../actions/delete';

export default async function TodoHomePage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; priority?: string }>
}) {
  const params = await searchParams
  const todos = await fetchTodos(params?.q,
    params?.priority as any);
  const time = new Date().toLocaleTimeString();

  return (
    <main className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Todo App</h1>
        <p className="text-sm text-gray-500 mb-4">Last updated: {time}</p>

        <div className="mb-6">
          <Link
            href="/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ➕ Add New Todo
          </Link>
        </div>
        <div className='my-4 space-y-4'>
          <form method="GET" className="flex items-center gap-3">
            <input
              type="text"
              name="q"
              placeholder="Search..."
              defaultValue={params?.q}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <select
              name="priority"
              defaultValue={params?.priority}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Filter
            </button>
          </form>

          <div className='flex items-center gap-6'>
            <form action={completeAllTodos}>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Complete All Todos
              </button>
            </form>

            <form action={deleteAllTodos}>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
              >
                Delete All Todos
              </button>
            </form>
          </div>

        </div>

        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No todos yet!</p>
            <p className="text-gray-400 text-sm mt-2">Create your first todo to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map(todo => (
              <div key={todo._id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <form action={toggleTodo.bind(null, todo._id)}>
                    <button
                      type="submit"
                      className="text-2xl hover:scale-110 transition-transform"
                      title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                    >
                      {todo.completed ? '✅' : '⬜'}
                    </button>
                  </form>
                  <div className='flex flex-col'>
                    <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {todo.title}
                    </span>
                    <p className='text-sm text-gray-500'>
                      Priority - <span className='italic'>
                        {todo.priority}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-gray-400">
                    Created {timeAgo(todo.createdAt)}
                  </p>
                  <Link
                    href={`/edit/${todo._id}`}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
                    title="Edit todo"
                  >
                    ✏️
                  </Link>

                  <form action={deleteTodoActon.bind(null, todo._id)}>
                    <button
                      type="submit"
                      className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                      title="Delete todo"
                    >
                      🗑️
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
