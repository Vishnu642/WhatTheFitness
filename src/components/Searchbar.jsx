import { Box, Flex } from "@chakra-ui/react"
import "./Searchbar.css"
import {BiSearch} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import { useEffect, useState } from "react"
import axios from "axios"
export const Searchbar=()=>{
 const [data,setData] = useState([])
 const [filterData,setFilterData] = useState([])
    useEffect(()=>{
        axios({
            method:"GET",
            url:"http://localhost:8080/data"
        }).then((res)=>{
            setData(res.data)
        }).catch((e)=>{
            console.log(e.data)
        })
    },[])

    console.log(data);

    const handleChange = (event)=>{
        const searchGym = event.target.value;
        const newFilter = data.filter((value)=>{
            return value.gym_name.toLowerCase().includes(searchGym.toLowerCase())
        })
        if(searchGym===""){
            setFilterData([])
        }else{
        setFilterData(newFilter);
        }
    }

    return(
        <Box className="container" >

            {/* ------------------------ Serachbar ------------------- */}

            <Box className="search-box" >
               <Flex className="searchbar">
                    <Box><BiSearch size="20px" /></Box>
                    <Box className="input-box" ><input className="input"
                    onClick={handleChange}
                    type="text" placeholder="Search gym name here" ></input></Box>
                    <Box><GoLocation size="20px" /></Box>
                    <Box><button className="clr-btn" >Clear</button></Box>
               </Flex>
            </Box>

            {/* ------------------------ Display gym details ------------------ */}

            <Box className="box">
                    <Box style={{width:"90%",margin:"auto",display:"flex"}} >

            {/* ------------------------------ Filter ----------------------------- */}

                    <Box className="filter" >
                        <Box style={{fontSize:"40px",fontWeight:"500"}} >Filter</Box>
                        <Box>
                            <Box style={{fontSize:"25px",fontWeight:"500",marginTop:"10px"}} >Location</Box>
                            <input style={{width:"300px",height:"60px",backgroundColor:"black",color:"white",border:"1px solid grey",borderRadius:"5px"}}  type="text" placeholder="Enter Location " ></input>
                        </Box>

                        <Box>
                            <Box style={{fontSize:"25px",fontWeight:"500",marginTop:"20px"}} >Cities</Box>
                            <input style={{width:"300px",height:"60px",backgroundColor:"black",color:"white",border:"1px solid grey",borderRadius:"5px"}} type="text" placeholder="Select City" ></input>
                        </Box>

                    </Box>

              {/* ---------------------------  DETAILS -------------------------------- */}

                    <Box className="display" >

                            {data.map((item)=>{
                                return(
                                  <Box className="gym-details" key={item.id} > 
                                    <Box className="free-tag" >
                                        <Box>Free</Box>
                                    </Box>

                                    <Box className="details" >
                                        <p>{item.gym_name}</p>
                                        <p>{item.address1},{item.address2},{item.city}</p>
                                        <p>{item.price} for 3 months</p>
                                    </Box>

                                    <Box className="last"  ><button className="book-btn" >Book Now</button></Box>
                                </Box>
                                )
                            })}

                    </Box>
                    </Box>
            </Box>

        </Box>
    )
}