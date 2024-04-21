import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Provider } from "react-redux";
import {store} from './app/app.js';
function App() {
  
  return (
    <Provider store={store}>
    <div>
      <Navbar/>
      <Outlet/>
    </div>
    </Provider>
  )
}

export default App
