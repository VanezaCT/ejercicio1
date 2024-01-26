import React from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('ejemplo', 'Defauld description', false, Levels.NORMAL)
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
