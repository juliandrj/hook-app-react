import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainApp } from './components/09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
//import { TodoApp } from './components/08-useReducer/TodoApp';
//import { Padre } from './components/07-tarea-memo/Padre'
//import { CallbackHook } from './components/06-memo/CallbackHook'
//import { MemoHook } from './components/06-memo/MemoHook'
//import { Memorize } from './components/06-memo/Memorize'
//import { Layout } from './components/05-useLayoutEffect/Layout'
//import { FocusScreen } from './components/04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'
//import { CounterApp } from './components/01-useState/CounterApp'
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </StrictMode>
)
