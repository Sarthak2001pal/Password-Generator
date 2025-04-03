
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length,setLength] = useState('8');
  const [numAllow,setNumAllow] = useState(false);
  const [charAllow,setCharAllow] = useState(false);
  const [password,setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*_,./?|";

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllow,setPassword])


  return (
    <>
      <div className='fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-lg   mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-600'>
      <h1 className='text-white text-center text-2xl py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='password' 
          readOnly  
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 py-3'>
          <input
           type="range"
           min={8}
           max={100} 
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllow}
          id="numberInput"
          onChange={() => {
              setNumAllow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
