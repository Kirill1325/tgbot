import { useEffect, useState } from 'react'

import './App.scss'

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
    console.log(tg.initDataUnsafe.user?.language_code)
  }, [])

  const handleClose = () => {
    tg.close()
  }

  return (
    <>

      <button onClick={handleClose}>Close</button>
    </>
  )
}

export default App
