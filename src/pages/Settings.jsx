import React from 'react';
import { Link,Outlet } from 'react-router-dom';


export const Settings = () => {
  return (
    <div className='settings container'>
       <h1>Settings</h1>
       <ul>
           <li>
                <Link to=''>User</Link>
           </li>

           <li>
             <Link to='profile'>Profile</Link>
           </li>
       </ul>

       <div id="outlet">
          <Outlet/>   
        </div>
    </div>
  )
}
