"use client";

import { Container, Box, Text, Image, Button, Heading, Link } from "@chakra-ui/react";
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
        // minHeight="50vh"
        // maxHeight={["90vh", "60vh"]}
        height="auto"
        textAlign="center"
        marginTop={["30px", "20px"]}
        padding={["15px", "30px"]}
        flex="1"
        marginBottom="15px"
        overflow="scroll"
      >
        <Heading color="green" fontSize={["ld", "2xl"]} marginBottom="10px">How To Care For You Charcuterie Board or Butcher Block</Heading>
        <Text color="black" fontSize={["md", "xl"]} lineHeight="1.6">
        First of all, PLEASE don&rsquo;t put me in the dishwasher or submerge me in
          hot water, that would make me very sad😊. To clean me, mild dish soap and warm water will do the
          trick. Give me a quick towel dry and you&rsquo;re good for the next use. Oh,
          and once in awhile (every couple months) give me spa treatment by
          putting some food grade mineral oil, or some board butter on me (check
          it out here on <Link 
    href="https://www.amazon.com/Organic-Wood-Butter-Ounces-Utensils/dp/B08DMVXQ2C/ref=asc_df_B08DMVXQ2C?mcid=5f0a92179cc93396b8833cd892a63e05&hvocijid=10384352100853190259-B08DMVXQ2C-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=730432682330&hvpos=&hvnetw=g&hvrand=10384352100853190259&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028709&hvtargid=pla-2281435178618&psc=1"
    color="blue.500" 
    target="_blank"
    rel="noopener noreferrer"
  >
    Amazon
  </Link>). Don&rsquo;t forget, I&rsquo;m all natural, so if you put
          certain foods on me, I can stain a little. Sharp knives will leave
          a mark, but that&rsquo;s up to you, and I can always be resurfaced if needed. Follow these tips, and I&rsquo;ll be around for a long time and be the talk of your next gathering. Thanks Again For Bringing Me Home!!!
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
