"use client"

import React, { FormEventHandler } from 'react'
import Modal from './Modal'
import { useState } from 'react';
import { addTodo } from '../../../api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {

  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo ({
      id: uuidv4(),
      text: newTaskValue
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="w-full py-3 bg-white rounded-md text-black font-bold">Add New Task</button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='text-3xl font-bold'>Add New Task</h3>
          <div className='modal-action'>
            <input onChange={(e) => setNewTaskValue(e.target.value)} 
                   value={newTaskValue} 
                   type="text" 
                   placeholder="Type here" 
                   className="input input-bordered w-full" />
            <button className='btn' type='submit'> Submit </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask