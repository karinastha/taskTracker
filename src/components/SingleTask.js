import { FaTimes } from "react-icons/fa"

const SingleTask = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3> {task.text} <FaTimes styles={{
                color: 'red',
                cursor: 'pointer'
            }}
                onClick={() => onDelete(task.id)}
            />
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default SingleTask
