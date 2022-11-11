import React from "react";
import {AppContext} from "./ContextProvider/ContextProvider";
import HeaderTop from "./HeaderTop";
import Error from "./Error";
import {Box,Image,Text,Flex,Button,Icon, Spacer } from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

function Trips(){
    const {token,name} = React.useContext(AppContext);


    if(token!=null){
        return <div>
            <HeaderTop/>
            <Box w="50%" m="auto" mt="40px">
                <Flex>
                    <Text ml="50px" fontWeight="extrabold" fontSize="24px">Trips</Text>
                    <Spacer/>
                    <Text color="blue" mr="50px">+ Create a trip</Text>
                </Flex>
                <Image m="auto" mt="55px" src="https://a.travel-assets.com/egds/illustrations/uds-default/baggage__large.svg" alt="triplogo" />
                <Text fontWeight="bold" fontSize="22px" w="70%" textAlign="left" m="auto" mt="30px">{name}, you have no upcoming trips. Where are you going next?</Text>
                <Button w="70%" bg="blue.600" color="white" h="45px" mt="30px">Start exploring</Button>
                <br/>
                <Button mt="25px" h="80px" w="70%" sx={{border:"1px solid black",borderRadius:"10px"}} p="20px" bg="white">
                    <Flex>
                        <Box>
                            <Text textAlign="left" ml="25px" fontSize="14px">Find your booking</Text>
                            <Text textAlign="left" ml="25px" fontSize="12px" mt="15px">Use your itinerary number to look it up</Text>
                        </Box>
                        {/* <Spacer/> */}
                        <Box ml="130px" mt="15px"> <Icon as={ChevronRightIcon}/> </Box>
                    </Flex>
                </Button>
            </Box>
        </div>
    }
    return <div>
        <HeaderTop/>
        <Error/>
    </div>

}

export default Trips;
