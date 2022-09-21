import { Route, HashRouter ,Routes,Link} from "react-router-dom";
import Home from "./Page/Home"
import About from "./Page/About"
import Profile from "./Page/Profile"
function App() {
    return (
            <HashRouter>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profile" element={<Profile/>}/>

            </Routes>
              
            </HashRouter>
    );
}

export default App;
