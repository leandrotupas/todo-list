import Image from "next/image";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList.tsx";
import { getAllTodos } from "../../api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold"> To Do List</h1>
      <h3> By Leandro Miguel Tupas</h3>

      <div className="w-[800px] mt-5">
        <AddTask />
      </div>

      <div className="w-[800px] mt-5">
        <ToDoList tasks={tasks}/>
      </div>
      
    </main>
  );
}
