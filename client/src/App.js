import Home from "./pages/homepage/Home";
import Topbar from "./components/topbar/TopBar";
import Single from "./pages/homepage/single/Single";
import Write from "./pages/homepage/write/Write";
import Settings from "./pages/homepage/settings/Settings";
import Login from "./pages/homepage/login/Login";
import Register from "./pages/homepage/register/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const user=false;
  
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={user?<Home/>:<Register/>}/>
      <Route path='/login' element={user?<Home/>:<Login/>}/>
      <Route path='/write' element={user?<Write/>:<Register/>}/>
      <Route path='/setting' element={user?<Settings/>:<Register/>}/>
      <Route path='/posts/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  );
}




export default App;
