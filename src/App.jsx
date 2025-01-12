import { About } from "./Components/About/about";
import { Contact } from "./Components/Contact/contact";
import { EducationSec } from "./Components/Education/educationSec";
import { Experience } from "./Components/Expericence/expericence";
import { Home } from "./Components/Home/home";
import { Project } from "./Components/Project/project";
import ScrollToTop from "./Components/scroll/scroll";
import { Skill } from "./Components/Skill/skill";





function App() {
  
  return (
    <>

    <Home />
    <About />
    <EducationSec />
    <Skill />
    <Experience />
    <Project />
    <Contact />
    <ScrollToTop /> 

    </>
  )
};

export default App;
