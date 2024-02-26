import { useState } from 'react'
import { useEffect } from 'react'
import Leftcard from './Compoments/Leftcard'
import Cardinfo from './Compoments/Cardinfo'
import Cardplan from './Compoments/Cardplan'
import Cardsummary from './Compoments/Cardsummary'
import Thankyou from './Compoments/Thankyou'

import './App.css'
import Cardadd from './Compoments/Cardadd'

function App() {
  const [active, setactive] = useState(1)
  useEffect(() => {
    if (active>5) {
      setactive(5)
    }else if (active<1){
      setactive(1)
    }
    
}, [active])

  const [planvalue, setplanvalue] = useState("")
  const [moory, setmoory] = useState("Monthly")
  const [chosed, setchosed] = useState("")
  const [checked, setchecked] = useState("")
    const [checked1, setchecked1] = useState("")
    const [checked2, setchecked2] = useState("")

  useEffect(() => {
    
  }, [planvalue])

  return (
    <div className='bg-[#ECF3FD] w-screen h-screen flex justify-center items-center '>
      <div className='bg-white rounded-2xl w-[820px] h-[500px] flex justify-center gap-[50px] items-center'>
       <Leftcard active={active} setactive={setactive}></Leftcard>
       <div>
        {
          active==1?<Cardinfo></Cardinfo>:active==2?<Cardplan setchosed={setchosed} setmoory={setmoory} setplanvalue={setplanvalue}></Cardplan>:active==3?<Cardadd setchecked2={setchecked2} setchecked1={setchecked1} setchecked={setchecked} moory={moory}></Cardadd>:active==4?<Cardsummary checked2={checked2} checked1={checked1} checked={checked} chosed={chosed} moory={moory} planvalue={planvalue}></Cardsummary>:active==5?<Thankyou></Thankyou>:""
        }
        <div className='h-[60px] flex justify-center items-center '>
          <div className='w-1/2 h-full flex justify-center items-center'>
          {
            active>1&&active<5?<button onClick={()=>{setactive(active-1)}} className='me-[70px] w-[100px] h-[40px] text-sm rounded-xl font-bold flex justify-center items-center text-black'>Go Back</button>:""
          }
          </div>
          <div className='w-1/2 h-full flex justify-center items-center'>
          {
            active==4?<button onClick={()=>{setactive(active+1)}} className=' ms-8 w-[100px] h-[40px] text-sm rounded-xl bg-[#3D36FE] flex justify-center items-center text-white'>Confirm</button>:active>=1&&active<5?<button onClick={()=>{setactive(active+1)}} className='hover:bg-[#00367E] ms-8 w-[100px] h-[40px] text-sm rounded-xl bg-[#03244F] flex justify-center items-center text-white'>Next Step</button>:""
          }
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
