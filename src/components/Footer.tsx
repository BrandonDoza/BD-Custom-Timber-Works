import { Box, Link, Image, Flex, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <Box 
            bg="#D1D0CE" 
            width="100%" 
            py={["5px", "10px"]}  
            textAlign="center"
        >
            <Flex 
                justify="center" 
                align="center" 
                gap={["20px", "40px"]}
                flexWrap="wrap"
            >
                {/* Instagram Logo */}
                <Link href="https://www.instagram.com/bdcustomtimberworks?igsh=cGV1bjRsdzhzZDJx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color="black" />
                </Link>

                {/* Made in USA Logo */}
                <Image 
                    src="/images/usalogo.png"  
                    alt="Made in USA"
                    boxSize={["80px", "100px"]}
                />
            </Flex>

            <Text fontSize="sm" mt="10px" color="black">
                © {new Date().getFullYear()} BD Custom Timber Works. All Rights Reserved.
            </Text>
        </Box>
    );
}
