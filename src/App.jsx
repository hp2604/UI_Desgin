import Header from "./components/Header"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import './App.css'
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import TeamSection from "./components/TeamSection"
import NewsSection from "./components/NewsSection"
import Section7 from "./components/Section7"

function App() {

  return (
    <>
    <div className="flex flex-col gap-10">
    <Header/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <TeamSection/>
    <NewsSection/>
    </div>
 
    </>
  )
}

export default App
