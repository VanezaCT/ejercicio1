import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import { Task } from './models/task.class';
import TaskListComponent from './components/container/task_list';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MiComponenteConContexto from './hooks/example3';
import Example4 from './hooks/example4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name='VANEZA'></Greeting> */}
        {/* <GreetingF name='vaneza'></GreetingF> */}

        {/* componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* uso de hooks */}
        {/* <Example1></Example1> */}

        {/* uso de useState, useRef, useEffect */}
        {/* <Example2></Example2> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        <Example4 nombre='Vaneza'>
          <h3> Ejemplo de props.children</h3>
        </Example4>
      </header>
    </div>
  );
}

export default App;
