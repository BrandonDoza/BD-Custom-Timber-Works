import { Container, Box, Text, Image } from "@chakra-ui/react";

export default function About() {
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
        opacity="85%"
        width={["90%", "80%", "60%"]}
        minHeight="50vh"
        maxHeight="100vh"
        textAlign="center"
        marginTop={["30px", "80px"]}
        padding={["15px", "30px"]}
        flex="1"
        marginBottom="15px"
        overflow="hidden"
      >
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6">
          At BD Custom Timber Works, we're passionate about creating
          exceptional, handcrafted wood pieces that elevate any space. Founded
          by Brandon, a woodworking enthusiast based in the heart of Arvada,
          Colorado, our company is driven by a love for the outdoors and the
          beauty of the mountains that surround us. When Brandon isn't in the
          workshop, you'll find him mountain biking, exploring nature with his
          two dogs, or spending quality time with his wife. We bring that same
          dedication and care into every project, whether it's custom furniture,
          charcuterie boards, or unique woodworking solutions. At BD Custom
          Timber Works, we don't just build furniture—we craft pieces that tell
          a story and become a part of your home.
        </Text>

        <Image
          src="/images/tablesaw2.jpg"
          alt="Woodworking Hand Plane"
          width="100%"
          maxHeight={["100px", "250px"]}
          objectFit="cover"
          borderRadius="md"
          mt={10}
        />
      </Box>
    </Container>
  );
}
