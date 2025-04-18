import { useState } from 'react';
import './Global.css';
// import Empty from './components/Empty';
import Header from './components/Header';
// import ItemTask from './components/ItemTask';
import Input from './components/Input'
import TasksInfos from './components/TasksInfo';
import ItemTask from './components/ItemTask';

interface TaskProps {
  id: number;
  text: string;
  active: boolean;
}

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [listTask, setListTask] = useState<TaskProps[]>([]);



  function newToDoCreate() {
    if (newToDo.trim() === "") return;

    const newTask: TaskProps = {
      id: Date.now(),
      text: newToDo.trim(),
      active: false,
    }
    setListTask((prevItems) => [...prevItems, newTask]);
    setNewToDo("");
  }

  return (
    <>
      <Header />
      <main className='container'>
        <Input newToDo={newToDo} onSubmit={newToDoCreate} setNewToDo={setNewToDo} />
        <TasksInfos likeCount={listTask.length} /> 
          {listTask.map((task) => {
            return <ItemTask key={task.id} checkbox={task.active} content={task.text}/>
          })}
      </main>
    </>

  )
}

export default App

// , setTasks

// const [tasks] = useState<TaskProps[]>([{content: "Beber água", checkbox: true}, {content: "Tomar banho", checkbox: false}])
// <TasksInfos />
// {tasks.length <= 0 ? <Empty /> : tasks.map((task) => <ItemTask content={task.content} checkbox={task.checkbox} />)}