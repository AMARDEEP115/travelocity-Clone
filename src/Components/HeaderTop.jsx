import {Box,Image} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem,Button,Text} from '@chakra-ui/react';
import {MdCardTravel,MdOutlineFlight} from "react-icons/md";
import {HiBuildingOffice2} from "react-icons/hi2";
import {AiFillCar} from "react-icons/ai";
import {GiCruiser} from "react-icons/gi";
import {RiTicket2Fill} from "react-icons/ri";
import {Link} from "react-router-dom";
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverArrow,PopoverCloseButton} from '@chakra-ui/react';
import React from "react";
import { AppContext } from "./ContextProvider/ContextProvider";

export default function HeaderTop(){
    const {name,token,Logout}=React.useContext(AppContext);

    return <Box bg="#0a438b">
            <Box display={"flex"} h="72px" pt="20px" m="auto" w="1200px" sx={{justifyContent:"space-between"}}>
                <Box w="300px" h="20px" sx={{display:"flex", alignItems:"center",gap:"30px",marginBottom:"25px"}}>
                    <Link to="/"><Image src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" w="90px" alt="logo"/></Link>
                    <Menu>
                      <MenuButton fontSize="17px" color="white" bg="#0a438b" >
                        More travel
                      </MenuButton>
                      <MenuList w="375px" boxShadow='2xl'>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={MdCardTravel}  mr="20px"/>Packages</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={HiBuildingOffice2} mr="20px"/>Stays</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={AiFillCar} mr="20px"/>Cars</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={MdOutlineFlight} mr="20px"/>Flight</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={GiCruiser} mr="20px"/>Cruises</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px"><Icon as={RiTicket2Fill} mr="20px"/>Things to do</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px">Trips for Me</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px">Discover</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px">Travel Deals</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px">Get Inspired</MenuItem>
                        <MenuItem _hover={{background: "white",color: "blue",}} w="350px" ml="15px" fontSize="17px">Group & meetings</MenuItem>
                      </MenuList>
                    </Menu>
                </Box>
                <Box display={"flex"} gap="30px">
                    <Link to="/" style={{color:"white"}}>Español</Link>
                    <Link to="/list" style={{color:"white"}}>List your property</Link>
                    <Link to="/support" style={{color:"white"}}>Support</Link>
                    <Link to="/trips" style={{color:"white"}}>Trips</Link>
                    {token!=null?
                    (<Popover>
                      <PopoverTrigger>
                        <Button bg="#0a438b" color="white" mt="-7px" ml="-13px" _hover={{backgroundColor:"#0a438b"}}>{name}</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader textAlign="left" ml="15px" fontWeight="bold">{name}</PopoverHeader>
                        <PopoverBody>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="30px">Account</Text>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="30px">List of favorites</Text>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="30px">Feedback</Text>
                          <hr style={{marginTop:"15px"}}/>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="15px"  onClick={Logout}>Log Out</Text>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>):
                    (<Popover>
                      <PopoverTrigger>
                        <Button bg="#0a438b" color="white" mt="-7px" ml="-13px" _hover={{backgroundColor:"#0a438b"}}>Sign in</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader textAlign="left" ml="15px" fontWeight="bold">Members can access discounts and special features</PopoverHeader>
                        <PopoverBody>
                          <Button bgColor="#0a438b" sx={{borderRadius:"10px"}} h="40px" color="white" w="280px" mt="20px">
                            <Link to="/login">Sign in</Link>
                          </Button>
                          <Text fontWeight="bold" color="blue.500" mt="10px"><Link to="/signup">Create a free account</Link></Text>
                          <br/>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="30px">List of favorites</Text>
                          <hr style={{marginTop:"15px"}}/>
                          <Text textAlign="left" ml="20px" color="gray" fontSize="14px" mt="15px">Feedback</Text>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>)}
                </Box>
            </Box>
        </Box>
}