//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { Box } from "@chakra-ui/react"
import { Router, Route } from "react-router-dom"
import { Button } from "@chakra-ui/react/button"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NavBar from "./components/Navbar"

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Router>
      <Button colorScheme="blue">Button</Button>
    </Box>
  )
}

export default App
