import React, { useState } from 'react';

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [valeur, setValeur] = useState('');
    const [style, setStyle] = useState("fs-3 mx-2 form-control w-25");

    const handleAddTask = (e) => {
        setValeur(e.target.value);
    };

    const addTask = () => {
        if (valeur !== "") {
            setTasks((prevTasks) => [...prevTasks, { value: valeur, completed: false }]);
            setValeur('');
        }
    };

    const endtask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: true } : task
            )
        );
    };

    //NB:
    // _: This is a convention to indicate that the parameter
    //  is not being used inside the callback function. In this case,
    //  it represents each element in the array, but since it's not used, 
    // it's named _ to signal that fact.

    // for the unused parameter, you can use any valid variable name in its place BHAL your name
    // filter is (element, index)
    // Since you're only interested in the index, you don't need the actual values of the elements.
    
    const sup = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const mod = () => {
        alert(" Hi, this is Marwa. The update is not working, but I just want to share it because I like the color. Have a nice day!")
    };

    return (
        <div>
            <p className='fs-4 p-2'>To do list</p>
            <div className='p-5 d-flex justify-content-center'>
                <input type='text' className="form-control w-50" onChange={handleAddTask} value={valeur} />
                <button className='btn btn-info text-white mx-2' onClick={addTask}>
                    Add A Task
                </button>
            </div>
            <div className='p-5 d-flex flex-column justify-content-center mx-5'>
                {tasks.map((task, index) => (
                    <div key={index} className='d-flex justify-content-center m-2'>
                        <input
                            className={task.completed ? `${style} text-decoration-line-through` : style}
                            type='text'
                            value={task.value}
                        />
                        <button className='btn btn-outline-success btn-sm mx-2' onClick={() => endtask(index)}>
                            End Task
                        </button>
                        <button className='btn btn-outline-danger btn-sm mx-2' onClick={() => sup(index)}>
                            Delete
                        </button>
                        <button type="button" className="btn btn-outline-warning btn-sm mx-2" onClick={() => mod(index)}>
                            Update
                        </button>
                    </div>
                ))}
            </div>
            <br />
        </div>
    );
}
