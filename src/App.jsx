
import { SideBar } from "./Components/SideBar/sideBar";
import { Home } from "./Components/Home/home";




function App() {
  
  return (
    <>
    <div className="relative">
    <div className="absolute z-10 w-[430px] rounded-[50%] h-[440px] left-[260px] top-[100px]">
      <img className="w-full h-full object-cover rounded-[50%] " src="./user.avif" />
    </div>
    <Home />
    </div>
        

    </>
  )
};

export default App;
