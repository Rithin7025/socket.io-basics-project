import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <input type="text" placeholder='send message' />
   <button>Send message</button>
   </>
  )
}

export default App
