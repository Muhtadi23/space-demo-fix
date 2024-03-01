import bgVid from "../src/assets/earth-bg.mp4"
import Footer from "./components/Footer/Footer"
import Gallary from "./components/Gallary/Gallary"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Rapid from "./components/Rapid/Rapid"
import Rapidtwo from "./components/Rapidtwo/Rapidtwo"
import Services from "./components/Services/Services"

function App() {


  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]" src={bgVid} type="video/mp4" ></video>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
        <Services></Services>
        <Rapid></Rapid>
        <Rapidtwo></Rapidtwo>
        <Gallary></Gallary>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
