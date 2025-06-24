import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Otp } from './components/Otp'
import { Button } from './components/buttons'
import { SidebarToggle } from './components/icons/SidebarToggle'

function App() {
  const [sidebaropen,setsidebaropen] = useState(true);

  return (
    <>
      <div className='flex'>
        <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen} />
        <MainContent />
      </div>
    </>
  )
}

function Sidebar({ sidebaropen, setsidebaropen}){
  if(!sidebaropen){
    return <div className='fixed top-0 left-0'>
        <div className='cursor-pointer hover:bg-blue-200 ' onClick = {() => { setsidebaropen(!sidebaropen) }}> 
          <SidebarToggle />
        </div>
      </div>
  }
  return <>
    <div className='h-screen w-50 bg-amber-600'>
      <div>
        <div className='cursor-pointer  hover:bg-blue-200 ' onClick = {() => { setsidebaropen(!sidebaropen) }}> 
          <SidebarToggle />
        </div>
      </div>
    </div>
  </>
}
function MainContent(){
  return <>
  <div className='flex flex-col w-full'>
    <div className='bg-black w-full h-50'></div>
    <div className='grid grid-cols-10 gap-5 p-8'>
      <div className='h-96 col-span-2 bg-red-200 rounded-2xl -translate-y-20 shadow-lg'></div>
      <div className='h-96 col-span-5 bg-yellow-200 rounded-2xl shadow-lg'></div>
      <div className='h-96 col-span-3 bg-green-200 rounded-2xl shadow-lg'></div>
  </div>
  </div>
  </>
}
export default App