import Header from "./components/Header"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import './App.css'
import Section4 from "./components/Section4"

function App() {

  return (
    <>
    <div className="flex flex-col gap-10">
    <Header/>
    <Section2/>

    <Section3/>
    <Section4/>

    </div>
 
    </>
  )
}

export default App
