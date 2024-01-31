import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { Levels } from '../../models/levels.enum';

function TaskComponent({task, complete, remove }) {
    
//    useEffect(() => {
//        console.log('tarea creada')

//     return () => {
//         console.log(`task: ${task.name} antes de que desaparezca`)
//     };
//    }, [task]);

 //comprobar si se trata de un level u otro 
function taskLevelBagde() {
    switch (task.level) {

        case Levels.NORMAL:
            return (<h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level}
                </span>
            </h6>)
        case Levels.URGENT:
            return (<h6 className='mb-0'>
                <span className='badge bg-warning'>
                    {task.level}
                </span>
            </h6>)
        case Levels.BLOCKING:
            return (<h6 className='mb-0'>
                <span className='badge bg-danger'>
                {task.level}
                </span>
            </h6>)
    
        default:
            break;
    }
}
 
function taskCompletedIcon() {
    if (task.completed) {
       return( <i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i> )
    } else {
       return( <i onClick={()=>complete(task)} className='bi-toggle-off task action' style={{ color: 'grey' }}></i> )
    }
}

  return (
    <tr className='tw-normal'>
        <th>
              <span className='ms-2'>{task.name}</span>
        </th>
          <td className='aling-middle'>
              <span className='ms-2'>{task.description}</span>
          </td>
          <td className='aling-middle'>
            {taskLevelBagde()}
          </td>
          <td className='aling-middle'>
            {taskCompletedIcon()}
            <i onClick={()=> remove(task)} className='bi-trash task-action' style={{ color: 'tomato' , fontSize:'20px'}}></i>

          </td>
    </tr>
    
    // <div>
    //     <h2 className='task-name'>
    //         Nombre : { task.name };
    //     </h2>
    //     <h3>
    //         Descripcion: { task.description };
    //     </h3>
    //     <h4>
    //         Level: { task.level };
    //     </h4>
    //     <h5>
    //         This task is: {task.completed ? 'COMPLETED':'PENDING'};
    //     </h5>
    // </div>
  )
}

TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired ,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent
 