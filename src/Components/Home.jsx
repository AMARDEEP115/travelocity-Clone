import Footer from "./Footer";
import Header from "./Header";
import HomeMiddle from "./HomeMiddle";
import {Box} from "@chakra-ui/react";

export default function Home(){
    return <div style={{backgroundColor:"#f0f3f5"}}>
        <Header/>
        <HomeMiddle/>
        <Footer/>
        <Box h="80px"></Box>
    </div>
}