import { useRef, useState } from "react";
import { About } from "./Components/About/about";
import { Contact } from "./Components/Contact/contact";
import { EducationSec } from "./Components/Education/educationSec";
import { Experience } from "./Components/Expericence/expericence";
import { Home } from "./Components/Home/home";
import { Project } from "./Components/Project/project";
import ScrollToTop from "./Components/scroll/scroll";
import { Skill } from "./Components/Skill/skill";
import { SideBar } from "./Components/SideBar/sideBar";





function App() {
  const[isTrue,setIsTrue]=useState(false);
  const homeRef=useRef();
  const aboutRef=useRef();
  const projectRef=useRef();
  const contactRef=useRef();
  const experienceRef=useRef();
  const skillRef=useRef();
  const eduRef=useRef()

  function handleRef(ref){

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>

    <div ref={homeRef}>
      <Home isTrue={isTrue} setIsTrue={setIsTrue} contactRef={contactRef} handleRef={handleRef} />
      </div>


      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={eduRef}>
        <EducationSec />
      </div>

      <div ref={skillRef}>
        <Skill />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={projectRef}>
        <Project />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <ScrollToTop />
      <SideBar isTrue={isTrue}
        setIsTrue={setIsTrue}
        handleRef={handleRef}
        homeRef={homeRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        eduRef={eduRef}
        
        
        
        
        
          />

    </>
  );
};

export default App;
