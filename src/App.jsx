import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Aboutme from "./components/about/Aboutme"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Aboutme/>
       <Portfolio/>
       <Works/>
       <Contact/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
