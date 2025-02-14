import { Container, Text, Image, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      bgImage="url('/images/Aspens2.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={["70vh", "65vh"]}
      width="100vw"
      maxWidth="none"
      margin="0"
      padding="0"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      overflow="hidden"
      minHeight="100vh"
    >
      <Box
        bg="#D1D0CE"
        borderRadius="lg"
        shadow="md"
        opacity="85%"
        width={["90%", "80%", "50%"]}
        height="auto"
        textAlign="center"
        marginTop={["30px", "15px"]}
        marginBottom="15px"
        padding={["5px", "5px"]}
      >
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6">
          BD Custom Timber Works brings your vision to life with the timeless
          beauty and craftsmanship of wood. Whether you&rsquo;re looking for
          custom furniture, charcuterie boards, or bespoke woodworking
          solutions, we specialize in creating pieces that blend artistry with
          functionality.
        </Text>
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6" mt={4}>
          Each project is crafted with precision and care, using the finest
          materials to ensure lasting quality and aesthetic appeal. Our team is
          passionate about transforming wood into works of art that add warmth,
          character, and a personal touch to your space.
        </Text>
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6" mt={4}>
          Explore our portfolio and discover how we can help you create
          something truly unique. From design to final product, BD Custom Timber
          Works is dedicated to delivering craftsmanship that you&rsquo;ll
          treasure for years to come.
        </Text>

        <Image
          src="/images/handplane.jpg"
          alt="Woodworking Hand Plane"
          width="100%"
          height={["100px", "250px"]}
          objectFit="cover"
          borderRadius="md"
          mt={4}
        />
      </Box>
    </Container>
  );
}
