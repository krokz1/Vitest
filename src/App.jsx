import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button/Button'

function App() {
  const [content, setContent] = useState('Yed')
  function handleClick(tup) {
    console.log ('click', tup)
    setContent(tup)
  }

  return (
    <div>
      <section>
        <Button onClick={()=> handleClick('tup')}>Rjywtgwbz</Button>
        <p>{content}</p>
      </section>
    </div>
  )
}

export default App
