import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Metrics from './components/Metrics'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Platforms from './components/Platforms'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import Loader from './components/Loader'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return ()=> clearTimeout(timer)
  }, [])
  
  return (
    <>
    {loading ? <Loader /> :
    <>
     <Navbar />
     <main>
        <Hero /> 
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Platforms />
        <Education />
        <Contact />
     </main> 
     <Footer />
     <FloatingContact />
     </>
     }
    </>
  )
}

export default App