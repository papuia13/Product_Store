//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { Box, Button } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NavBar from "./components/NavBar"

function App() {

  return (
    <Router>
      <Box minH={"100vh"}>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
        </Routes>
        <Button colorScheme="blue">Button</Button>
      </Box>
    </Router>
  )
}

export default App
