import AddTask from "./components/AddTask.tsx";
import ToDoList from "./components/ToDoList.tsx";
import { getAllTodos } from "../../api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:px-24 lg:px-48">
      <h1 className="text-3xl font-bold">To Do List</h1>
      <h3>By Leandro Miguel Tupas</h3>

      <div className="w-full mt-5">
        <AddTask />
      </div>

      <div className="w-full mt-5">
        <ToDoList tasks={tasks} />
      </div>
    </main>
  );
}
