"use client"

import React, { FormEventHandler, useState } from 'react';
import { ITask } from '../../../types/tasks';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import Router, { useRouter } from 'next/navigation';
import { editTodo, deleteTodo } from '../../../api';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const router = useRouter();

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
        id: task.id,
        text: taskToEdit
    })
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();

  }

  return (
    <tr key={task.id}>
      <td className="w-full px-4 py-6"> {task.text} </td>
      <td className="flex flex-row gap-5 px-4 py-6">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          className="text-blue-500"
          size={25}
          cursor="pointer"
        />
        <FiTrash2 onClick={() => setOpenModalDeleted(true)} className="text-red-500" size={25} cursor="pointer" />

        {/* Render modal outside of the FiEdit icon */}
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo} className='text-white'>
            <h3 className="text-3xl font-bold">Edit Task</h3>
            <div className="modal-action">
              <input
                onChange={(e) => setTaskToEdit(e.target.value)}
                value={taskToEdit}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />

              <button className="btn" type="submit">
                Submit
              </button>

            </div>
          </form>
        </Modal>

        {/* Render modal outside of the FiEdit icon */}
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDeleted}>
            <h3 className='text-lg text-white'> Are you sure you want to delete this task?</h3>
            <div className='modal-action text-white'>
                <button onClick={() => handleDeleteTask(task.id)}> Yes </button>
            </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
