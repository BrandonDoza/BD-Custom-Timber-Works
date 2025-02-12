import { Container, Box, Text, Image } from "@chakra-ui/react";
import { FaRegQuestionCircle } from "react-icons/fa";

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
        width={["90%", "80%", "60%"]}
        minHeight="50vh"
        maxHeight={["100vh", "60vh"]}
        textAlign="left"
        marginTop={["30px", "80px"]}
        padding={["15px", "30px"]}
        flex="1"
        marginBottom="15px"
        overflow="scroll"
      >
        <Text color="brown" fontSize={["xl", "2xl"]} marginBottom="16px">
          Why don't you sell on your site?
        </Text>
        <Text color="black" fontSize={["md", "xl"]} marginBottom="8px">
          All of our items are custom made, and we sell through them very
          quickly. That being said, I do keep a little stock on some items. The
          best way to see if I have what you are looking for is to head over to
          the contact page and send me an email or text.
        </Text>
        <Text color="brown" fontSize={["xl", "2xl"]} marginBottom="16px">
          How do I care for my butcher block or charcuterie board?
        </Text>
        <Text color="black" fontSize={["md", "xl"]} marginBottom="8px">
          First of all, PLEASE don't put me in the dishwasher or submerge me in
          hot water ☺️. To clean me, mild dish soap and warm water will do the
          trick. Give me a quick towel dry and you're good for the next use. Oh,
          and once in awhile (every couple months) give me spa treatment by
          putting some food grade mineral oil on me, or some board butter (check
          it out on amazon). Don't forget, I'm all natural, so if you put
          certain foods on me, I can stain a little, and sharp knives will leave
          a mark.
        </Text>
        <Text color="brown" fontSize={["xl", "2xl"]} marginBottom="16px">
          How long does it take for my custom order?
        </Text>
        <Text color="black" fontSize={["md", "xl"]} marginBottom="8px">
          That depends how busy I get. If you're looking for a custom butcher
          block or charcuterie board, give me at least 2 weeks before the event
          you need it for. If it's a custom table, it can take months for me to
          source the wood, ensure the design is what you're after, and get it to
          you. If it's during the holidays, I stop taking orders December 1st to
          make sure everyone gets theirs on time. Best bet is to contact me.
        </Text>
        <Text color="brown" fontSize={["xl", "2xl"]} marginBottom="16px">
          Is resin food safe?
        </Text>
        <Text color="black" fontSize={["md", "xl"]} marginBottom="8px">
          This is a common question. The resin I use is food safe per the
          manufacturer and their MSDS data (and also made in the USA!). Yes,
          resin is a chemical (when it's in liquid form), but when the parts are
          mixed together, they create a chemical reaction that hardens the
          compound. When the curing process is finished (about a week), what is
          left over is a completely inert substance, meaning it is safe for use.
          That being said, there is the possiblitiy, if you use a knife of the
          resin surface, tiny pieces could potentially be removed from the area,
          and they could potentially enter your body. That's a small chance, and
          again, it is an inert substance at that point.
        </Text>
        <Text color="brown" fontSize={["xl", "2xl"]} marginBottom="16px">
          How do you engrave the wood?
        </Text>
        <Text color="black" fontSize={["md", "xl"]} marginBottom="8px">
          I use a high powered 10 watt laser and computer software to engrave
          the wood. This basically etches the wood and takes off a couple
          milimeters, so the design is permanently on the wood.
        </Text>
      </Box>
    </Container>
  );
}
