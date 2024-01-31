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


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     console.log('modificacion de tareas')
    //     return () => {
    //         console.log('cuando la tarea desaparezca')
    //     };
    // }, [tasks]);

    function completeTask(task) {
        console.log('complete this task:', task ); 
        const index= tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks[index].completed= !tempTasks[index].completed
        //actualiza el estado del componente
        // actualiza la iteracion del map del componente y actualiza la tarea
        setTasks(tempTasks)
    }
function deleteTask(task) {
    console.log('delete this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1)
    setTasks(tempTasks)
}

function addTask(task) {
    console.log('add this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task)
    setTasks(tempTasks)
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
                            { tasks.map((task, index)=>{
                                return(
                                    <TaskComponent 
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}>
                                    </TaskComponent> 
                                )
                            })
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>

                {/* aplicar un for/math para renderizar una lista de tarea */}
        </div>
    );
};



export default TaskListComponent;
