import { useContext } from 'react'
import './App.css'
import Game from './Game'
import Results from './Results'
import Score from './Score'
import { rpsContext } from './Context'

function App() {
  const {isResult} = useContext(rpsContext)
  return (
  <main className='main-container'>
    <Score />
    {!isResult && <Game />}
    {isResult && <Results />}
  </main>
  )
}

export default App
