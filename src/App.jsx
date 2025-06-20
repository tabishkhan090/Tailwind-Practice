import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Otp } from './components/Otp'
import { Button } from './components/buttons'

function App() {

  return (
    <div className='h-screen bg-main flex flex-col items-center justify-center'>
      <Otp numOfBox={6} />
      <Button> Verify </Button>
    </div>
  )
}

export default App