import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignIn from "./pages/Signin"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"


export default function Signout(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/sign-in" element = {<SignIn />} />
        <Route path = "/sign-up" element = {<SignUp />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/profile" element = {<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}