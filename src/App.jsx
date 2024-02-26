import { useState } from 'react'
import { useEffect } from 'react'
import Leftcard from './Compoments/Leftcard'
import Cardinfo from './Compoments/Cardinfo'

import './App.css'

function App() {
  const [active, setactive] = useState(1)
  useEffect(() => {
    console.log(active);
}, [active])

  return (
    <div className='bg-[#ECF3FD] w-screen h-screen flex justify-center items-center '>
      <div className='bg-white rounded-2xl w-[820px] h-[500px] flex justify-center gap-[50px] items-center'>
       
       <Leftcard active={active} setactive={setactive}></Leftcard>
       <div>
        <Cardinfo></Cardinfo>
        <div className='h-[60px] flex justify-center items-center '>
          <button className='ms-[280px] w-[100px] h-[40px] text-sm rounded-xl bg-[#03244F] flex justify-center items-center text-white'>Next Step</button>
        </div>
       </div>
       


      </div>
    </div>
  )
}

export default App
