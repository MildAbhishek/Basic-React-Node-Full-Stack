import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from'axios';
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response=>{
      console.log(JSON.stringify(response))
      setJokes(response.data)
    }).then(()=>{

    });
  }, [])
  return (
    <>
     <h1>Top Jokes</h1>
     <p>{jokes.length}</p>
     { jokes.length>0 && jokes.map((joke, index)=>{
      return(
        <p key={index}>{joke.content}</p>
      )
     })
     }
    </>
  )
}

export default App
