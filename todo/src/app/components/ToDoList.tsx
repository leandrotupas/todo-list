import React from 'react'
import { ITask } from '../../../types/tasks'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 md:w-[60%]">
        <thead>
            <tr>
                <th className="px-4 py-6 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">TO DO</th>
                <th className="px-4 py-6 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg"></th>
            </tr>
        </thead>    

        <tbody className="bg-white divide-y divide-gray-200 text-black">
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ) )}
        </tbody>
    </table>

  )
}

export default ToDoList