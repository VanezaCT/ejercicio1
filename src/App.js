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
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/axiosCRUDExample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name='VANEZA'></Greeting> */}
        {/* <GreetingF name='vaneza'></GreetingF> */}

        {/* componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* uso de hooks */}
        {/* <Example1></Example1> */}

        {/* uso de useState, useRef, useEffect */}
        {/* <Example2></Example2> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* <Example4 nombre='Vaneza'>
          <h3> Ejemplo de props.children</h3>
        </Example4> */}
        
        {/* <GreetingStyled name="vaneza"></GreetingStyled> */}
      {/* </header> */}
      {/* <Father></Father> */}
      {/* ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

        {/* ejemplo de formik y yup */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}

        {/* ejemplos de procesos asincronos */}
        {/* <AsyncExample></AsyncExample> */}

        {/* <ObservableExample></ObservableExample> */}
        
        {/* <FetchExample></FetchExample> */}

        {/* <AxiosExample></AxiosExample> */}
        <AxiosCRUDExample></AxiosCRUDExample>
        
    </div>
  );
}

export default App;
