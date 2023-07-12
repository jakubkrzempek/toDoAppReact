import React, { useState } from 'react'
import '../styles/AddTask.scss'
export const AddTask = (props) => {

    const [text, setText] = useState("");
    const [isImportant, setImportant] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const textHandler = (event) => {
        setText(event.target.value);
    }

    const importantHandler = (event) => {
        setImportant(event.target.checked === true)
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }


    return (
        <div className='addTask'>
            <label htmlFor="name">zadanie:  <input name='name' id="name" type="text" placeholder="Dodaj zadanie do wykonania" value={text} onChange={textHandler} /></label>
            <label htmlFor="importatnt" >wysoki priorytet  <input type="checkbox" name="important" id="important" checked={isImportant} onChange={importantHandler} /></label>


            <label htmlFor="deadline">termin wykonania:  <input type="date" id="deadline" name="deadline" value={date} onChange={dateHandler} /></label>

            <button disabled={text === "" ? true : false}
                onClick={() => {
                    setText("");
                    setImportant(false);
                    setDate(new Date().toISOString().slice(0, 10))
                    return props.addTask(text, isImportant, date)
                }}>
                Dodaj zadanie
            </button>
        </div >
    )
}
