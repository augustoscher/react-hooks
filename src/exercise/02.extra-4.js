import * as React from 'react'
import { useLocalStorage } from './use-local-storage'

function Greeting({initialName = ''}) {
  // const [name, setName] = React.useState(initialName)
  // we kept the same way to call React.useState:
  const [name, setName] = useLocalStorage('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
