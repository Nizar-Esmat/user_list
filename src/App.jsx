import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import User_list from './components/User_list/User_list.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <User_list/>
      
    </div>
  )
}

export default App
  