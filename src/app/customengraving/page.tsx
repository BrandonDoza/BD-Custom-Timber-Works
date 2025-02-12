import { Container, Box, Text, Image } from "@chakra-ui/react";

export default function CustomEngraving() {
  return (
    <Container
      bgImage="url('/images/Aspens2.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="100vh"
      width="100vw"
      maxWidth="none"
      margin="0"
      padding="0"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        bg="#D1D0CE"
        borderRadius="lg"
        shadow="md"
        width={["90%", "80%", "50%"]}
        minHeight="50vh"
        maxHeight={["60vh", "60vh"]}
        textAlign="center"
        marginTop={["30px", "80px"]}
        padding={["15px", "30px"]}
        flex="1"
        marginBottom="15px"
        overflow="hidden"
        display="flex" 
        flexDirection="column"
      justifyContent="flex-start" 
      alignItems="center" 
      >
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6" px={["5px", "90px"]} marginBottom="20px">
          We can custom engrave just about anything into your purchase. Names, logos, phrases, even some pictures. It makes for the perfect personalized gift for weddings, house warmings, holidays, birthdays, real estate closings, and so much more!!!
        </Text>
        <Box width={["100%", "75%"]} border="4px solid black" borderRadius="8px">
      <video style={{ width: "100%" }} controls>
        <source src="/images/Laser Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>        
      </Box>
    </Container>
  );
}
