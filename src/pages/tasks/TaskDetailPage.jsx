import React from 'react';
import { useParams} from 'react-router-dom';


const TaskDetailPage = () => {

    const{id}=useParams()
  
    let taskList = [
        {
            id: 1,
            name: 'Task 1',
            description: 'My fist task'
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'My second task'
        }
    ]

    const oneTask = taskList.find((e) => e.id === Number(id));
    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{oneTask.name}</h2>
            <h3>{oneTask.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
