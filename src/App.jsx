import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  let heroData = [
    {text1:"Dive into", text2:"What you love" },
    {text1:"Indulge", text2:"Your passions" },
    {text1:"Give in to", text2:"Your passions" }
  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2 ?0 : count+1})
    }, 3000);
  }, [])

  return (
    <>
     <Background playStatus={playStatus} heroCount={heroCount} />
     <Navbar />
     <Hero 
     setPlayStatus={setPlayStatus}
     setHeroCount={setHeroCount}
     heroCount={heroCount}
     playStatus={playStatus}
     heroData={heroData[heroCount]}
     />
    </>
  )
}

export default App
