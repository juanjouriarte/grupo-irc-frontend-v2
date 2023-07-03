import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import MainPage from './MainPage'
import Team from './Team'
import Navbar from './Navbar'
import Register from '../profile/Register'
import Login from '../profile/Login'
import Game from '../game/Game'
import PreGame from '../game/PreGame'


function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/instructions"} element={<Instructions />}/>
        <Route path={"/Login"} element={<Login />}/>
        <Route path={"/Register"} element={<Register />}/>
        <Route path={"/main-page"} element={<MainPage />}/>
        <Route path={"/team"} element={<Team/>}/>
        <Route path={"/navbar"} element={<Navbar/>}/>
        <Route path={"/Game"} element={<Game/>}/>
        <Route path={"/PreGame"} element={<PreGame/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
