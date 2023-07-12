import React, { useContext } from 'react'
import { TasksContext } from './App'
import "../styles/Task.scss"

export const Task = () => {

    const { tasks, doneClickHandler, deleteClickHandler } = useContext(TasksContext);

    let tasksToDo = tasks.filter((task) => task.isDone === false);
    let tasksDone = tasks.filter((task) => task.isDone === true);

    if (tasksDone.length >= 2) {
        tasksDone.sort((a, b) => {

            if (a.doneDate < b.doneDate) return 1
            if (a.doneDate > b.doneDate) return -1
            else return 0
        })
    }

    if (tasksToDo.length >= 2) {
        tasksToDo.sort((a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            if (a < b) return -1
            if (a > b) return 1
            else return 0
        })
    }

    tasksToDo = tasksToDo.map((task) => {

        return (
            <li className={task.isImportant ? "important" : null} key={task.id}>{task.name} <p>do {task.deadline}</p>
                <div className="buttons">
                    <button
                        onClick={() => doneClickHandler(task.id)}>Wykonane
                    </button>
                    <button onClick={() => deleteClickHandler(task.id)} >Usuń</button>
                </div>
            </li>
        )
    }
    )

    tasksDone = tasksDone.map((task) => {

        return (

            <li className={task.isImportant ? "important" : null} key={task.id}>
                {task.name} <strong>wykonane: {task.doneDate.toISOString().slice(0, 10)}</strong>
            </li>
        )

    }
    )


    return (
        <>
            <div className='taskToDo'>
                <h1>Zadania do wykonania ({tasksToDo.length})</h1>
                <ul>{tasksToDo}</ul>
            </div>
            <hr />
            <div className='taskDone'>
                <h1>Zadania wykonane ({tasksDone.length})</h1>
                <ul>{tasksDone}</ul>
            </div>
        </>
    )
}
