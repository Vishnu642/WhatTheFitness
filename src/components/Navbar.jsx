import { Box, Button, Flex } from "@chakra-ui/react"
import "./Navbar.css"
export const Navbar=()=>{
    return(
        <Flex className="nav-box" >
                <Box className="logo" >WTF</Box>
                <Flex className="nav" >
                    <Box className="link" >Fitness</Box>
                    <Box className="link" >Nutrition</Box>
                    <Box className="link" >Gyms</Box>
                    <Box className="link" >Become WTF Partner</Box>
                    <Box className="link" >About Us</Box>
                    <Box><button className="btn" >Login</button></Box>
                </Flex>
        </Flex>
    )
}