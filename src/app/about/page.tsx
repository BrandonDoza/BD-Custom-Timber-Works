"use client";

import { Container, Box, Text, Image, Button } from "@chakra-ui/react";
import { useAppRouter } from "../RouterContext";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function About() {
  const { navigateToFaq } = useAppRouter();

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
        width={["90%", "80%", "60%"]}
        minHeight="50vh"
        maxHeight={["90vh", "60vh"]}
        textAlign="center"
        marginTop={["30px", "80px"]}
        padding={["15px", "30px"]}
        flex="1"
        marginBottom="15px"
        overflow="scroll"
      >
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6">
          At BD Custom Timber Works, we&rsquo;re passionate about creating
          exceptional, handcrafted wood pieces that elevate any space. Founded
          by Brandon, a woodworking enthusiast based in the heart of Arvada,
          Colorado, our company is driven by a love for the outdoors and the
          beauty of the mountains that surround us. When Brandon isn&rsquo;t in
          the workshop, you&rsquo;ll find him mountain biking, exploring nature
          with his two dogs, or spending quality time with his wife. We bring
          that same dedication and care into every project, whether it&rsquo;s
          custom furniture, charcuterie boards, or unique woodworking solutions.
          At BD Custom Timber Works, we don&rsquo;t just build furniture—we
          craft pieces that tell a story and become a part of your home.
        </Text>
        <Button
          size={["sm", "xl"]}
          width={["150px", "180px"]}
          margin="20px"
          variant="surface"
          onClick={navigateToFaq}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
          <FaRegQuestionCircle />
          <Box>F.A.Q.</Box>
        </Button>

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
