import { Routes,Route,Link,NavLink,Outlet} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Settings } from "./pages/Settings";
import { Users } from "./pages/Users";
import { Profile } from "./pages/Profile";

function App() {
  return (
      <div className="app">
        <ul className="app-list">
          <li className="app-list__item">
            <NavLink className="item-link" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="item-link" to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className="item-link"  to='/settings'>Settings</NavLink>
          </li>
        </ul>

        <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/settings" element={<Settings/>}>
              <Route index element={<Users/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
