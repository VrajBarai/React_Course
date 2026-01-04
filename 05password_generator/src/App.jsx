import { useState,useCallback,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed,setNumber]=useState(false)
  const[character,setCharacter]=useState(false)
  const[password,setPassword]=useState("")

  const passwordRef = useRef(null);

  

  const passwordGenerator=useCallback(function(){
    let pass=''
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numberAllowed){
      str+="0123456789"
    }
    if(character){
      str+="!@#$%^&*()_+~`|}{[]:;?><,./-="
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor (Math.random()*str.length+1)
      pass+=str.charAt(char)

    }
    setPassword(pass)
  }, [length,numberAllowed,character,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3); // set Range
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,character])


  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div>
          <input type='text' 
          value={password}
          placeholder='Your Password'
          readOnly
          ref={passwordRef}
          />  
          <button
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div>
          <div>
            <input 
            type='range'
            min={6}
            max={50}
            value={length}
            onChange={(e)=>{setLength(e.target.value) }} // e.target.value gives the current value of the range input
            className='cursor-pointer'S
               />
               <label>Length: {length}</label>          
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=>setNumber(prev=>!prev)}
            />
            <label>Numbers</label>
            <input
            type='checkbox'
            defaultChecked={character}
            onChange={()=>setCharacter(prev=>!prev)}
            />
            <label>Special Characters</label>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
