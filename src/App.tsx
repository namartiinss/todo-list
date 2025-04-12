// import Input from './components/Input';
import './Global.css';
import Empty from './components/Empty';
import Header from './components/Header';
import ItemTask from './components/ItemTask';
import Task from './components/Task'
import TasksInfos from './components/TasksInfo';

// const task: TasksType[] = [
//   content: Content[];
// ]

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Task />
        <TasksInfos />
        <Empty />
        <ItemTask />
      </main>
    </>

  )
}

export default App