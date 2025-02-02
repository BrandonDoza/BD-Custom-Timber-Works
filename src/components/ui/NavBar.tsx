"use client"
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"
import { GiHammerNails } from "react-icons/gi"
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
    const router = useRouter();

    function navigateToAbout() {
        router.push("/about");
    }

    function navigateToProjects() {
        router.push("/projects");
    }

    function navigateToContact() {
        router.push("/contact");
    }

    return (
        <Box 
            bg="#D1D0CE" 
            width="100%" 
            height={["100px", "180px"]}  // Taller on desktop so the logo fits
            display="flex" 
            alignItems="center" 
            px={["4", "8"]}  // Padding adapts for mobile and desktop
            justifyContent="space-between"
        >
            {/* Logo on the left */}
            <Box 
                display="flex" 
                alignItems="center"
            >
                <Link href="/">
                    <Image 
                        src="/images/blackLogo.svg"  
                        boxSize={["120px", "250px"]}  // Larger on desktop for proper scaling
                        borderRadius="full"
                        fit="cover" 
                    />
                </Link>
            </Box>

            {/* Buttons on the right */}
            <Box 
                display="flex" 
                justifyContent="flex-end"
                gap={["10px", "30px"]}  // More spacing between buttons on desktop
            >
                <Button 
                    size={["sm", "xl"]}  // Larger buttons on desktop
                    width={["50px", "180px"]}  // Wider buttons on desktop
                    variant="surface" 
                    onClick={navigateToProjects} 
                    _hover={{ bg: "white", color: "black", boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)" }}
                >
                    <GiHammerNails />
                    <Box display={["none", "inline"]}> Projects</Box> 
                </Button>

                <Button 
                    size={["sm", "xl"]}  
                    width={["50px", "180px"]}  
                    variant="surface" 
                    onClick={navigateToContact} 
                    _hover={{ bg: "white", color: "black", boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)" }}
                >
                    <RiMailLine />
                    <Box display={["none", "inline"]}> Contact</Box>
                </Button>

                <Button 
                    size={["sm", "xl"]}  
                    width={["50px", "180px"]}  
                    variant="surface" 
                    onClick={navigateToAbout} 
                    _hover={{ bg: "white", color: "black", boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)" }}
                >
                    <AiOutlineUser />
                    <Box display={["none", "inline"]}> About</Box>
                </Button>
            </Box>
        </Box>
    );
}
