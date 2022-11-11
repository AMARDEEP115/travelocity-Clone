import {Box,Image,Text,Button,Flex, Spacer} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/react';
import {ChevronRightIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Error(){
    return <Box w="700px" m="auto">
        <Text textAlign="left" fontWeight="extrabold" fontSize="24px">Trips</Text>
        <Image m="auto" mt="75px" src="https://a.travel-assets.com/egds/illustrations/uds-default/unlock__large.svg" alt="lock"/>
        <Link to="/signup" ><Button w="70%" mt="35px" bg="blue.600" color="white">Sign in or create free account</Button></Link>
        <Link to="/login" >
            <Button mt="25px" h="80px" w="70%" sx={{border:"1px solid black",borderRadius:"10px"}} p="20px" bg="white">
                <Flex>
                    <Box>
                        <Text textAlign="left" ml="25px" fontSize="14px">Don’t have an account?</Text>
                        <Text textAlign="left" ml="25px" fontSize="12px">Use your itinerary number and email to find a booking</Text>
                    </Box>
                    <Spacer/>
                    <Box ml="15px"> <Icon as={ChevronRightIcon}/> </Box>
                </Flex>
            </Button>
        </Link>
    </Box>
}

export default Error;
