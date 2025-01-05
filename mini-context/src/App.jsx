import Login from './Componentss/Login'
import Profile from './Componentss/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider> 
    <h1>REACT CONTEXT API</h1>
    <Login/>
    <Profile/>
     </UserContextProvider>
  )
}

export default App
