import { Box , Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input ,Flex, Spacer} from '@chakra-ui/react';
import {Icon} from "@chakra-ui/react";
import {ImLocation} from "react-icons/im";
import {MdDateRange} from "react-icons/md";

function HeaderBottom(){
    return <Box pt="25px" bgImage="url(https://forever.travel-assets.com/flex/flexmanager/images/2021/06/25/TVLY_SeizeYourSomeday_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh)" bgSize="100%" backgroundRepeat="no-repeat" h="377px">
    <Box>
      <Tabs bg="white" w="80%" m="auto" sx={{borderRadius:"10px"}}>
        <TabList fontSize="14px" m="auto" sx={{display:"flex",gap:"7px",paddingLeft:"30%"}}>
          <Tab>Stays</Tab>
          <Tab>Flights</Tab>
          <Tab>Cars</Tab>
          <Tab>Packages</Tab>
          <Tab>Things to do</Tab>
          <Tab>Cruises</Tab>
        </TabList>
        <TabPanels>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="20px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="500px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Going To'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='Check-In'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='Check-Out' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="25px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="250px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Leaving from'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="250px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Goin to'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='Departing'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='Returning' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="25px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="500px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Pick-Up from'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='Pick-Up'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='Drop' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="25px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="250px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Leaving from'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="250px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Going To'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='On'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='End' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="25px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="500px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Things to do in'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='From'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='To' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
          <TabPanel h="250px">
            <Flex w="1000px" m="auto" mt="25px">
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="500px">
                <Icon ml="25px" as={ImLocation}/>
                <Input border="none" placeholder='Going To'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange}/>
                <Input border="none" type="date" placeholder='Depart early as'/>
              </Box>
              <Spacer/>
              <Box sx={{display:"flex",alignItems:"center",border:"1px solid black",borderRadius:"10px"}} w="200px">
                <Icon ml="25px" as={MdDateRange} />
                <Input border="none" type="date" placeholder='Depart late as' />
              </Box>
            </Flex>
            <Button h="50px" w="200px" bgColor="#0a438b" color="white" mt="35px">Search</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
</Box>
}

export default HeaderBottom;
