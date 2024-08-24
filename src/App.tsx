import { useEffect } from 'react'

import './App.scss'

const tg = window.Telegram.WebApp
let lang = tg.initDataUnsafe.user?.language_code

function App() {

  useEffect(() => {
    tg.ready()
    // console.log(tg.initDataUnsafe.user?.language_code)
  }, [])

  const handleClose = () => {
    tg.close()
  }

  return (
    <>
      <p>{lang}</p>
      <button onClick={handleClose}>Close</button>
    </>
  )
}

export default App
