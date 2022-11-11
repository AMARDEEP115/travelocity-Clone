import {Box,Text,Image,Flex,Button,Input,Checkbox} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/react";
import {ViewIcon,ArrowBackIcon} from "@chakra-ui/icons";
import {Link, Navigate} from "react-router-dom";
import React from "react";
import { AppContext } from "./ContextProvider/ContextProvider";
// import { Spinner } from '@chakra-ui/react';

function SignIn(){
    const refData=React.useRef();
    const {Access,token}=React.useContext(AppContext);
    const [data,setData]=React.useState({
        email:"",
        password:""
    });

    const handleChange=(refData)=>{
        const {name,value}=refData.target;
        console.log(name,value);
        setData({...data,[name]:value});
    }

    // function Loading(){
    //     return <Box>
    //         <Image src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001" alt="logo" />
    //         <Spinner size='xl' />
    //     </Box>
    // }


    if(token!=null){
        return <Navigate to="/" />
    }

    return <Box>
        <Flex w="90%">
            <Link to="/" ><Icon boxSize="30px" as={ArrowBackIcon}/></Link>
            <Link to="/"><Image src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001" w="100px" ml="670px" alt="logo"/></Link>
        </Flex>
        <Box mt="25px"></Box>
        <hr/>
        <Box mt="30px" w="25%" m="auto">
            <Text fontSize="28px" fontWeight="bold" textAlign="left" mt="20px">Sign in</Text>
            <Box sx={{border:"1px solid black",borderRadius:"10px"}} mt="20px">
                <Input ref={refData} border="none" name="email" type="email" onChange={handleChange} placeholder="Email address"/>
            </Box>
            <Flex sx={{border:"1px solid black",borderRadius:"10px"}} mt="15px" alignItems="center">
                <Input ref={refData} border="none" name="password" type="password" onChange={handleChange} placeholder="Password" />
                <Icon mr="25px"  as={ViewIcon}/>
            </Flex>
            <Flex mt="20px">
                <Checkbox colorScheme='blue'>
                  Checkbox
                </Checkbox>
                <Text textAlign="left" ml="25px">Keep me signed in</Text>
            </Flex>
            <Text mt="30px" textAlign="left" fontSize="12px" color="gray">Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</Text>
            <Text mt="30px" textAlign="left" fontSize="15px" color="gray">By signing in, I agree to the Travelocity Terms and Conditions and Privacy Statement.</Text>
            <Button mt="30px" bg="blue.600" color="white" w="99%" h="45px" onClick={()=>{
                Access(data.email,data.password);
            }}>Sign in</Button>
            <Text mt="30px"fontSize="14px" color="blue">Forgot password?</Text>
            <Flex m="auto" w="60%" alignItems="center"><Text mt="30px" fontSize="14px">Don't have an account</Text><Link to="/signup"><Text fontSize="14px" mt="30px" ml="15px" color="blue">Create one</Text></Link></Flex>
            <Text mt="30px" fontSize="12px">or continue with</Text>
            <Flex w="60px" m="auto" alignItems="center" mt="25px">
                <Image src="https://a.travel-assets.com/egds/marks/apple.svg" w="20px" alt="apple" />
                <Image src="https://a.travel-assets.com/egds/marks/facebook.svg" w="20px" ml="20px" alt="facebook" />
            </Flex>
        </Box>
    </Box>
}

export default SignIn;
