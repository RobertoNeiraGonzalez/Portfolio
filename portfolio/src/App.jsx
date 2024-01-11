import './App.css'
import TypingEffect from './components/Name/Name'

function App() {

  const textToType = 'ROBERTO NEIRA'

  return (
    <>
      <TypingEffect text={textToType} />
    </>
  )
}

export default App
