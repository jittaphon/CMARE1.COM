import { Route, HashRouter ,Routes} from "react-router-dom";
import Home from "./Page/Home"
import About from "./Page/About"
import Profile from "./Page/Profile"
import Navbar from "./Component/Navbar"

function App() {
    return (
      
            <HashRouter>
            
              <Navbar/>
              
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profile" element={<Profile/>}/>

            </Routes>
              
            </HashRouter>
    );
}

export default App;
