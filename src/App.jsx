
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Project from './component/Project'
import Technologies from './component/technologies'

function App() {

  return (
    <div className='overflow-x-hidden text-cyan-50 antialiased selection:bg-cyan-300 selection:text-cyan-00'>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className=''>
       <Navbar/>
       <Hero/>
       <About/>
       <Technologies/>
       <Experience/>
       <Project/>
       <Contact/>
    </div>
    </div>
  )
}

export default App
