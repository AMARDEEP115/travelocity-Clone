import {Box,Text,HStack,Flex,Button,Spacer,Image,Input} from "@chakra-ui/react";
import { AspectRatio } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {ChevronDownIcon,ChatIcon} from "@chakra-ui/icons";
import {RiPencilFill} from "react-icons/ri";
import {MdAttachMoney} from "react-icons/md";
import {TbMessages} from "react-icons/tb";
import {ListItem,UnorderedList,} from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import React from "react";
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from '@chakra-ui/react';
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton} from '@chakra-ui/react';


function HomeMiddle(){
    const [text,setText]=React.useState("USA +1");
    const initialFocusRef = React.useRef();
    return <div style={{marginTop:"160px"}}>
        <Box>
            <Popover initialFocusRef={initialFocusRef} placement='bottom' closeOnBlur={false}>
              <PopoverTrigger>
                <Button sx={{position:"fixed",marginTop:"70px",marginLeft:"650px",backgroundColor:"white",borderRadius:"35px",height:"37px",width:"90px", border:"2px solid darkblue",color:"darkblue"}}><Icon as={ChatIcon} mr="10px"/>Help</Button>
              </PopoverTrigger>
              <PopoverContent color='black' bg='white' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                    <Image w="60px" m="auto" src="https://s3-us-west-1.amazonaws.com/csp.assets/icons/tvl.jpg" alt="agent"/>
                    Virtual Agent
                    <hr/>
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody h="400px">
                    <Text textAlign="left" ml="20px" fontSize="17px">
                        I’m here 24/7 to help you with your travel plans. If at any point I’m not able to assist you, I’ll connect you to an agent who can. What would you like to do?
                    </Text>
                </PopoverBody>
                <PopoverFooter border='0' display='flex' alignItems='center' justifyContent='space-between' pb={4}>
                  <Input placeholder="Type something"/>
                  <Button bgColor="blue.600" color="white">Send</Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
        </Box>
        <Box>
            <HStack spacing='24px' w="1200px" m="auto">
                <Box w="385px" h="220px" sx={{borderRadius:"10px"}} boxShadow='2xl'>
                    <Box sx={{borderRadius:"10px 10px 0px 0px"}} pt="35%" h="165px" w="100%" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh)" bgSize="100%" backgroundRepeat="no-repeat" >
                        <Text color="white" fontWeight="extrabold" textAlign="left" h="30px" pl="25px" >Find your perfect trip</Text>
                    </Box>
                    <Text fontSize="12px" color="gray" textAlign="left" mt="10px" ml="15px">Plan a trip for the whole family—from family travel tips to family-friendly filters, our tools make it easy.</Text>
                </Box>
                <Box w="385px" h="220px" sx={{borderRadius:"10px"}} boxShadow='2xl'>
                    <Box sx={{borderRadius:"10px 10px 0px 0px"}} pt="35%" h="165px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh)" bgSize="100%" backgroundRepeat="no-repeat" >
                        <Text color="white" fontWeight="extrabold" textAlign="left" h="30px" pl="25px">Book with flexibility</Text>
                    </Box>
                    <Text fontSize="12px" color="gray" textAlign="left" mt="10px" ml="15px">Looking for a change of scenery, but want something flexible? With free cancellation on most hotels, you can book with peace of mind.</Text>
                </Box>
                <Box w="385px" h="220px" sx={{borderRadius:"10px"}} boxShadow='2xl'>
                    <Box sx={{borderRadius:"10px 10px 0px 0px"}} pt="35%" h="165px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh)" bgSize="100%" backgroundRepeat="no-repeat" >
                        <Text color="white" fontWeight="extrabold" textAlign="left" h="30px" pl="25px">We've got your back</Text>
                    </Box>
                    <Text fontSize="12px" color="gray" textAlign="left" mt="10px" ml="15px">Need more help along your journey? We offer 24/7 support on social and through virtual agents onsite.</Text>
                </Box>
            </HStack>
            <HStack spacing='24px' w="1200px" m="auto" mt="25px">
                <Box w="587px" h="250px" sx={{borderRadius:"10px"}} boxShadow='2xl'>
                    <Box sx={{borderRadius:"10px"}} h="100%" bg="url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg)" bgSize="100% 100%" backgroundRepeat="no-repeat" >
                        <Box sx={{borderRadius:"10px"}} bg="RGBA(0, 0, 0, 0.48)" h="100%" pt="50px">
                            <Text color="white" fontSize="22px" fontWeight="bold" textAlign="left" ml="25px">All-inclusive resorts </Text>
                            <Text color="white" fontSize="14px" w="200px" textAlign="left" ml="25px">Think of nothing beyond having a great time with your family</Text>
                            <Button bgColor="white" color="blue" ml="-420px" mt="25px" h="30px">View deals</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="587px" h="250px" sx={{borderRadius:"10px"}} boxShadow='2xl'>
                    <Box sx={{borderRadius:"10px"}} h="250px" bgImage="url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg)" bgSize="100% 100%" backgroundRepeat="no-repeat" >
                        <Box sx={{borderRadius:"10px"}} bg="RGBA(0, 0, 0, 0.48)" h="100%" pt="50px">
                            <Text color="white" fontSize="22px" fontWeight="bold" textAlign="left" ml="25px">Last minute getaways</Text>
                            <Text color="white" fontSize="14px" w="200px" textAlign="left" ml="25px">Celebrate the moment with an unexpected getaway</Text>
                            <Button bgColor="white" color="blue" ml="-420px" mt="25px" h="30px">View deals</Button>
                        </Box>
                    </Box>
                </Box>
            </HStack>
            <Text fontSize="30px" fontWeight="bold" textAlign="left" ml="160px" mt="25px">Start planning your next trip</Text>
            <HStack spacing="24px" w="1195px" m="auto" mt="25px">
                <Box sx={{borderRadius:"10px"}} w="285px" h="200px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh)" bgSize="100% 100%">
                    <Text fontSize="25px" color="white" fontWeight="extrabold" mt="110px">Sunny beach hotel offers</Text>
                </Box>
                <Box sx={{borderRadius:"10px"}} w="285px" h="200px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh)" bgSize="100% 100%">
                    <Text fontSize="25px" color="white" fontWeight="extrabold" mt="150px">Car rental deals</Text>
                </Box>
                <Box sx={{borderRadius:"10px"}} w="285px" h="200px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh)" bgSize="100% 100%">
                    <Text fontSize="25px" color="white" fontWeight="extrabold" mt="150px">Member discounts</Text>
                </Box>
                <Box sx={{borderRadius:"10px"}} w="285px" h="200px" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh)" bgSize="100% 100%">
                    <Text fontSize="25px" color="white" fontWeight="extrabold" mt="110px">Vacation rental offers</Text>
                </Box>
            </HStack>
            <Text fontSize="30px" fontWeight="bold" textAlign="left" ml="160px" mt="25px">Featured offers</Text>
            <Flex  mt="25px">
                <Box  sx={{borderRadius:"10px"}}  w="980px" ml="160px" h="245px">
                    <Box sx={{borderRadius:"10px",backgroundPosition:"center center"}} pt="180px" h="100%" bg="linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.76)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg)" bgSize="cover" backgroundRepeat="no-repeat">
                        <Text color="white" fontWeight="bold" fontSize="17px" textAlign="left" ml="25px">Family vacation deals</Text>
                        <Text color="white" fontWeight="bold" fontSize="14px" textAlign="left" ml="25px">Seize your next unforgettable family vacation.</Text>
                    </Box>
                </Box>
                <Spacer/>
                <Box mr="40px">
                    {/* <Image src="https://tpc.googlesyndication.com/simgad/4338690144396482757" alt="add"/> */}
                    <a id="aw0" target="_top" href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsscwIxktFdqtYkKZjHEPvFiRc3-v5TNmtAqClCYBmur3_K0kERwg6B16Oy0HohpWh5TCQGU7cyX5MxgJy43j6HZX_2M5UXaCEm_whKUaEsDr0zMRUoAVdv564KJkvWLlv5aND4TdS7qwSRoFKD-DsD0lmdv5UZ9qRQ0p7-h4-7NtvfK7AqAHvbTTIJ5dtTYe_nvIAPr9_mrY_cXxP_hOEzOv8c0J7e8akutL0WUjkAf0-Nx9OfW0-IgRlptPz-BLYDJ2idGNMBFuEFWbLOrV8fvo7tWojxJ0f-R5M6EDmmKU3Tt2tzR6-fF0s5obeuzUbrX2MeMjxa5OBRONLXemyadnw&amp;sai=AMfl-YQIqXD-DZ-DjMI7C-jO8wBfRJntvLd-vWB-KS044a8MQKabaPrxs7dbq6aU6h_Qng4g9FDseioRFtr0K5rZZs3Wm_iGJR6x1PxI289LXF7ppwB1ao-q297YFkzGs5WZhM9T0_zIMBpA84z2lZqKY4Q30g&amp;sig=Cg0ArKJSzPri9Ys8VQZH&amp;fbs_aeid=[gw_fbsaeid]&amp;adurl=https://www.travelocity.com/inspire/where-should-you-go-to-seize-your-someday-quiz/&amp;nm=4" onfocus="ss('aw0')" onmousedown="st('aw0')" onmouseover="ss('aw0')" onclick="ha('aw0')">
                        <Image src="https://tpc.googlesyndication.com/simgad/4290224080188677731" border="0" width="300" height="250" alt="" class="img_ad" />
                    </a>
                </Box>
            </Flex>
            <Box sx={{borderRadius:"10px"}} w="1195px" m="auto" mt="75px" h="440px">
                <AspectRatio maxW='100%' maxH="100%" ratio={1}>
                  <iframe sx={{borderRadius:"10px"}} width="858" height="420" src="https://www.youtube.com/embed/ItS8X0SjT4s" title="Travelocity Romantic Cabana :30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </AspectRatio>
            </Box>
            <Text fontSize="30px" fontWeight="bold" textAlign="left" ml="160px" mt="25px">Here to help keep you on the move</Text>
            <HStack spacing="25px" w="1200px" m="auto" mt="25px">
                <Box sx={{borderRadius:"10px",border:"1px solid black"}} w="430px" h="80px" bgColor="white">
                    <Flex spacing="90%" pt="10px">
                        <Text ml="25px" fontWeight="extrabold" fontSize="16px">Change or cancel a trip</Text>
                        <Spacer />
                        <Icon as={RiPencilFill}   mr="20px"/>
                    </Flex>
                    <Text fontSize="13px" color="gray" textAlign="left" ml="25px" mt="10px">Make updates to your itinerary or cancel a booking</Text>
                </Box>
                <Box sx={{borderRadius:"10px",border:"1px solid black"}} w="430px" h="80px" bgColor="white">
                    <Flex spacing="90%" pt="10px">
                        <Text ml="25px" fontWeight="extrabold" fontSize="16px">Use a credit or coupon</Text>
                        <Spacer />
                        <Icon as={MdAttachMoney}   mr="20px"/>
                    </Flex>
                    <Text fontSize="13px" color="gray" textAlign="left" ml="25px" mt="10px">Apply a coupon code or credit to a new trip</Text>
                </Box>
                <Box sx={{borderRadius:"10px",border:"1px solid black"}} w="430px" h="80px" bgColor="white">
                    <Flex spacing="90%" pt="10px">
                        <Text ml="25px" fontWeight="extrabold" fontSize="16px">Track your refund</Text>
                        <Spacer />
                        <Icon as={TbMessages}   mr="20px"/>
                    </Flex>
                    <Text fontSize="13px" color="gray" textAlign="left" ml="25px" mt="10px">Check the status of a refund currently in progress</Text>
                </Box>
            </HStack>
            <Flex sx={{borderRadius:"10px",border:"1px solid black"}} w="1200px" m="auto" mt="25px" h="300px" bgColor="white">
                <Image sx={{borderRadius:"10px 0px 0px 10px"}} w="400px" h="100%" src="https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg" alt="MobileApplication" />
                <Flex>
                    <Box pl="25px" lineHeight="45px">
                        <Text textAlign="left" fontWeight="bold" fontSize="27px">Wander Wisely with the Travelocity app</Text>
                        <UnorderedList lineHeight="30px">
                          <ListItem textAlign="left" fontSize="14px" color="gray">Get helpful alerts about flight status and gate numbers</ListItem>
                          <ListItem textAlign="left" fontSize="14px" color="gray">Access all your travel details, even when offline</ListItem>
                          <ListItem textAlign="left" fontSize="14px" color="gray">Easily contact your hotel by messaging them right in the app</ListItem>
                        </UnorderedList>
                        <Text textAlign="left" fontWeight="bold" fontSize="17px">Text yourself a download link</Text>
                        <Flex w="550px">
                            <Menu w="180px">
                              <MenuButton  h="45px" as={Button} rightIcon={<ChevronDownIcon />}>
                                Country Code
                                <br/>
                                <Text fontSize="13px">{text}</Text>
                              </MenuButton>
                              <MenuList h="500px" w="70px" sx={{overflow:"scroll"}}>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Australia	+61</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Australian	+672 1</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Austria	+43</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Azerbaijan	+994</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bahamas	+1 242</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bahrain	+973</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bangladesh	+880</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Barbados	+1 246</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Barbuda	+1 268</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Belarus	+375</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Belgium	+32</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Belize	+501</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Benin	+229</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bermuda	+1 441</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bhutan	+975</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bolivia	+591</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bonaire	+599 7</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bosnia and Herzegovina	+387</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Botswana	+267</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Brazil	+55</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>British	+246</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>British Virgin +1 284</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Brunei	+673</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Bulgaria	+359</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Burkina	+226</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Burundi	+257</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cambodia	+855</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cameroon	+237</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Canada	+1</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cape Verde	+238</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Caribbean	+599 3</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cayman	+1 345</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>African +236</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Chad +235</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>New Zealand +64</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Chile +56</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>China	+86</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Christmas Island +61 89164</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cocos Islands +61 89162</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Colombia +57</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Comoros +269</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Congo	+242</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cook Islands	+682</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Costa Rica	+506</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ivory Coast	+225</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Croatia	+385</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cuba	+53</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guantanamo	+53 99</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Curaçao	+599 9</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Cyprus	+357</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Czech Republic	+420</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Denmark	+45	UTC+01:00</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Diego Garcia	+246</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Djibouti	+253</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Dominica	+1 767</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Dominican	+1 809</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>East Timor	+670</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Easter Island	+56</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ecuador	+593</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Egypt	+20</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>El Salvador	+503</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ellipso	+881 2</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Equatorial +240</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Eritrea	+291</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Estonia	+372</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ethiopia	+251</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Falkland +500</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Faroe	+298</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Fiji	+679</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Finland	+358</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>France	+33</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>French Antilles +596</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>French Guiana +594</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Gabon	+241</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Gambia	+220</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Georgia +995</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Germany +49</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ghana	+233</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Gibraltar	+350</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Greece	+30</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Greenland	+299</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Grenada +1 473</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guadeloupe	+590</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guam +1 67</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guatemala	+502</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guernsey	+44 1481</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guinea	+224</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guinea-Bissau	+245</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Guyana	+592</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Haiti	+509</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Honduras	+504</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Hong Kong	+852</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Hungary +36</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Iceland +354</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>ICO Global	+881 0</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>India +91</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Indonesia	+62</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Inmarsat SNAC	+870</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Iran	+98</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Iraq	+964</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Ireland +353</MenuItem>
                                    <MenuItem onClick={(e)=>setText(e.target.innerText)}>Iridium +881 6</MenuItem>
                              </MenuList>
                            </Menu>
                            <Spacer/>
                            <Input w="180px" placeholder="Phone number" h="45px" />
                            <Spacer/>
                            <Button w="180px" bgColor="#0a438b" color="white" h="45px">Get the app</Button>
                        </Flex>
                        <Text textAlign="left" color="gray" lineHeight="20px" mt="15px" fontSize="12px">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
                    </Box>
                    <Box mt="40px" mr="25px">
                        <Image w="200px" src="https://media-exp1.licdn.com/dms/image/C4D22AQGrOY2ZCFH1ig/feedshare-shrink_2048_1536/0/1668058116718?e=1671062400&v=beta&t=CZk4397bMPy5QFe2K42kYtnGXttBy42D8dOUVynCVPc" alt="insta" />
                        <Text>Scan the QR code</Text>
                    </Box>
                </Flex>
            </Flex>
            <Text fontSize="30px" fontWeight="bold" textAlign="left" ml="160px" mt="165px">Destination ideas to plan your next trip</Text>
            <Flex w="1200px" m="auto">
                <Box w="580px">
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton></AccordionButton>
                            <AccordionPanel></AccordionPanel>
                        </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                              Hotels
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Chicago Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Baltimore Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Maui Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Fort Walton Beach Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>London Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Cancun Hotels</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>San Jose Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Las Vegas Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Oakland Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Washington, DC Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Paris Hotels</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Punta Cana Hotels</Text>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                                Vacation packages
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Orlando Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Miami Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Seattle Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Denver Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Los Angeles Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Cancun Vacations</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>San Diego Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Nassau Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>San Francisco Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Montego Bay Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Las Vegas Vacations</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Cozumel Vacations</Text>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                                Cruises
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Bahamas Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Hawaii Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Australia/New Zealand Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>European Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>South Pacific Cruises</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Canada/New England Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Mexico Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Alaskan Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Bermuda Cruises</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Panama Canal Cruises</Text>                                
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                </Box>
                <Spacer/>
                <Box w="580px">
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton></AccordionButton>
                            <AccordionPanel></AccordionPanel>
                        </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                              Flights
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to London</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Washington, DC</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to St. Louis</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Barcelona</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Paris</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Honolulu</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Maui</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Fort Lauderdale</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Frankfurt</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Baltimore</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Orange County</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights to Los Cabos</Text>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                              Cars
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>London Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Fort Lauderdale Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Newark, NJ Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Dublin Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Washington, DC Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Madrid Car Rentals</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Maui Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Honolulu Car Rental</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>San Juan Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Barcelona Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>West Palm Beach Car Rentals</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Paris Car Rentals</Text>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                        <h2>
                          <AccordionButton>
                            <Box flex='1' fontWeight="bold" textAlign='left'>
                                All Inclusive resorts
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex w="400px">
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Top All-Inclusive Resorts</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All Inclusive Beach Resorts</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Cheap All Inclusive Resorts</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Best All Inclusive Resorts for Couples on a Budget</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Best Adults Only All Inclusive Resorts for Couples</Text>
                                </Box>
                                <Spacer/>
                                <Box>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All Inclusive Resorts Adults Only</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All Inclusive Family Resorts</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All Inclusive Resorts Couples Only</Text>
                                    <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Luxury All Inclusive Resorts Adults Only</Text>
                                </Box>
                            </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
            <Accordion allowToggle w="1200px" m="auto">
              <AccordionItem sx={{border:"1px solid white",borderRadius:"10px"}} mb="25px" bgColor="white">
                <h2>
                  <AccordionButton>
                    <Box flex='1' fontWeight="bold" textAlign='left'>
                        Travel deals
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex w="800px">
                        <Box>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Vacation Package Deals</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Daily Travel Deals</Text>                    
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Travelocity Coupon Code</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Hotels Under $99</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Flights Under $200</Text>
                        </Box>
                        <Spacer/>
                        <Box>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Travel Deals</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Hotel Deals</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>Last Minute Travel Deals</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All Inclusive Resort Deals</Text>
                            <Text textAlign="left" fontSize="14px" color="blue.400" ml="20px" _hover={{textDecoration:"underline"}}>All our Destinations</Text>
                        </Box>
                    </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
        </Box>
    </div>
}

export default HomeMiddle;
