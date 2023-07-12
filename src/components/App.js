
import { createContext, useState } from 'react';
import '../styles/App.scss';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';

export const TasksContext = createContext(null);
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "fryzjer",
      deadline: "2019-05-03",
      isDone: false,
      isImportant: false,
      doneDate: null
    },
    {
      id: 2,
      name: "Wynieśc smieci",
      deadline: "2012-03-01",
      isDone: false,
      isImportant: false,
      doneDate: null
    },
    {
      id: 3,
      name: "nauczyc sie reacta",
      deadline: "2032-09-12",
      isDone: false,
      isImportant: true,
      doneDate: null
    },
    {
      id: 4,
      name: "nakarmic psa",
      deadline: "2022-03-01",
      isDone: false,
      isImportant: true,
      doneDate: null
    },
    {
      id: 5,
      name: "umyć stół",
      deadline: "2099-03-01",
      isDone: false,
      isImportant: false,
      doneDate: null
    }

  ])
  const doneClickHandler = (id) => {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
        task.doneDate = new Date();
      }
      return task;
    })

    setTasks(updateTasks);
  }
  const deleteClickHandler = (id) => {
    const updateTask = tasks.filter(task => task.id !== id);
    setTasks(updateTask);
  }

  const addTask = (text, isImportant, date) => {
    const updateTasks = [...tasks];
    const newItem = {
      id: updateTasks.length + 1,
      name: text,
      deadline: date,
      isDone: false,
      isImportant: isImportant,
      doneDate: null
    }

    updateTasks.push(newItem);
    setTasks(updateTasks)
  }
  return (
    <TasksContext.Provider value={{ tasks, doneClickHandler, deleteClickHandler }} >

      <AddTask addTask={addTask} />
      <hr />
      <TaskList />

    </TasksContext.Provider>
  );
}

export default App;
