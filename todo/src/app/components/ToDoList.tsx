import React from 'react'
import { ITask } from '../../../types/tasks'

interface TodoListProps {
    tasks: ITask[]
}

const ToDoList: React.FC<TodoListProps> = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
        <thead>
            <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">TO DO</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
        </thead>    

        <tbody className="bg-white divide-y divide-gray-200 text-black">
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap">Malcolm Lockyer</td>
                <td className="px-6 py-4 whitespace-no-wrap">1961</td>
            </tr>
        </tbody>
    </table>

  )
}

export default ToDoList