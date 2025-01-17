import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub,{githubInfoLoader} from './Components/GitHub/GitHub.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='' element={<Layout/>}>
<Route path='/' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='user/:userid' element={<User/>}/>
<Route
   loader={githubInfoLoader}
 path='github' 
 element={<GitHub/>}/>

</Route>
 )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
