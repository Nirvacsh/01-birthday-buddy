import List from './List.jsx'
import data from './data.js'
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
