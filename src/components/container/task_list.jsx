import React, {useEffect, useState} from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {


    const defaultTask = new Task('ejemplo', 'Defauld description', false, Levels.NORMAL)
    const [task, setTask] = useState(defaultTask);

    useEffect(() => {
        console.log('modificacion de tareas')
        return () => {
            console.log('cuando la tarea desaparezca')
        };
    }, [task]);

    const changCompleted =()=>{
        console.log('cambiar estado de tarea')
    }
    return (
        <div>
        <div>
                <h1>Your Task:</h1>
        </div>
            {/* aplicar un for/math para renderizar una lista de tarea */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
