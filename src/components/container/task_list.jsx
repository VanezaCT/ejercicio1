import React, {useEffect, useState} from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('example1', 'Description1', true, Levels.NORMAL)
    const defaultTask2 = new Task('example2', 'Description2', true, Levels.URGENT)
    const defaultTask3 = new Task('example3', 'Description3', true, Levels.BLOCKING)


    const [task, setTask] = useState([defaultTask1, defaultTask2,defaultTask3]);

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
            <div className='col-12'>
                <div className='card'> 
                    {/* card header {title} */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    {/* card body {content} */}
                    {/* data-mbd-perfect-scrollbar para incorporar un scroll si hay muchas tareas*/}
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{position:'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>

                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { task.map((task, index)=>{
                                return(
                                    <TaskComponent 
                                        key={index}
                                        task={task}>
                                    </TaskComponent> 
                                )
                            })
                            }
                            </tbody>

                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
                {/* aplicar un for/math para renderizar una lista de tarea */}
        </div>
    );
};



export default TaskListComponent;
