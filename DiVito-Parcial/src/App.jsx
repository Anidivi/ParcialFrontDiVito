import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [user, setUser] = useState({
    name: '',
    color: '',
  })
  const [show, setShow] = useState(false)


  return (
    <div className="App">
      <Form setShow={setShow} user={user} setUser={setUser} />
      { show  && <Card name={user.name} color={user.color}/> }
    </div>
  )
}

export default App
