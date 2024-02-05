import { useState } from 'react'
import  {Signup} from './components/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className='bg-slate-100 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <Signup></Signup>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
