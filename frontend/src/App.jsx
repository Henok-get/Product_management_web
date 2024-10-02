import { Box } from "@chakra-ui/react"
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
function App() {
 

  return (
    <>
<Box minH={"100vh"}>
  <BrowserRouter>
 <Navbar/>

  <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/create" element={<CreatePage/>}/>

  </Routes>
  </BrowserRouter>
</Box>
    </>
  )
}

export default App
