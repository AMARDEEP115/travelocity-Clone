import {Box,Image,Text,Flex, Spacer} from "@chakra-ui/react";

export default function Footer(){
    return <Box w="1200px" m="auto" mt="60px">
        <Flex mb="25px">
            <Box>
                <Image src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="sitename"/>
            </Box>
            <Spacer/>
            <Box>
                <Text textAlign="left" fontWeight="bold" fontSize="14px">Company</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">About</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Jobs</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">List your property</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Partnerships</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Newsroom</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Investor Relations</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Roaming Gnome Store</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Advertising</Text>
            </Box>
            <Spacer/>
            <Box>
                <Text textAlign="left" fontWeight="bold" fontSize="14px">Explore</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Hotels in United States</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Vacation Rentals in United States</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Vacation Packages in United States</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Domestic Flights</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Car Rentals in United States</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Travelocity Reviews</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Travelocity Coupons</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Unique Places to Stay</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Travel Blog</Text>
            </Box>
            <Spacer/>
            <Box>
                <Text textAlign="left" fontWeight="bold" fontSize="14px">Policies</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Privacy Policy</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Terms of Use</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Vrbo terms and conditions</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Accessibility</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Do not sell my personal information</Text>
            </Box>
            <Spacer/>
            <Box>
                <Text textAlign="left" fontWeight="bold" fontSize="14px">Help</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Support</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Cancel your hotel or vacation rental booking</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Cancel your flight</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Refund timelines, policies & processes</Text>
                <Text textAlign="left" color="blue.600" _hover={{textDecoration:"underline"}} fontSize="12px">Use a Travelocity coupon</Text>
            </Box>
        </Flex>
        <hr/>
        <Text color="gray" fontSize="12px" mt="30px">© 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.</Text>
        <Text color="gray" fontSize="12px">Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.</Text>
    </Box>
}