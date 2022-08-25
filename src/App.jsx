import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { Searchbar } from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box >
       <Navbar/>
       <Searchbar/>
    </Box>
  )
}

export default App
