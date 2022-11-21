import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at school',
                day: 'Feb 7th at 2:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Grocery shopping',
                day: 'Feb 11th at 5:30pm',
                reminder: false,
            },
            {
                id: 4,
                text: 'Jumba Class',
                day: 'Nov 24th at 7:30pm',
                reminder: true,
            },

        ]
    )

    //delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {
                    ...task, reminder:
                        !task.reminder
                } : task
            ))
    }

    //Add Task 
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? (
                <Tasks tasks={tasks}
                    onDelete={deleteTask} onToggle={toggleReminder} />) : (
                'No Tasks to Show!'
            )}
        </div>
    )
}
export default App
