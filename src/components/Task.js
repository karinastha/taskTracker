import React from 'react'
import SingleTask from './SingleTask';
import { useState } from 'react';



const Task = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <SingleTask key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}

                />
            ))}
        </>
    )
}

export default Task
