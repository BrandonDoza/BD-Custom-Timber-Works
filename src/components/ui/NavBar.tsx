"use client";

import { Box, Button, Image } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";
import { GiHammerNails } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { GiLaserPrecision } from "react-icons/gi";
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

  function navigateToCustomEngraving() {
    router.push("/customengraving");
  }


  return (
    <Box
      bg="#D1D0CE"
      width="100%"
      height={["100px", "180px"]}
      display="flex"
      alignItems="center"
      px={["4", "8"]}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Link href="/">
          <Image
            src="/images/blackLogo.svg"
            boxSize={["120px", "250px"]}
            borderRadius="full"
            fit="cover"
            alt="BD Custom Timber Works Logo - Saw Blade Outline"
          />
        </Link>
      </Box>

      <Box display="flex" justifyContent="flex-end" gap={["10px", "30px"]}>
        <Button
          size={["sm", "xl"]}
          width={["50px", "180px"]}
          variant="surface"
          onClick={navigateToProjects}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
          <GiHammerNails />
          <Box display={["none", "inline"]}> Projects</Box>
        </Button>

        <Button
          size={["sm", "xl"]}
          width={["50px", "180px"]}
          variant="surface"
          onClick={navigateToContact}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
          <RiMailLine />
          <Box display={["none", "inline"]}> Contact</Box>
        </Button>

        <Button
          size={["sm", "xl"]}
          width={["50px", "180px"]}
          variant="surface"
          onClick={navigateToAbout}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
          <AiOutlineUser />
          <Box display={["none", "inline"]}> About</Box>
        </Button>
        <Button
          size={["sm", "xl"]}
          width={["50px", "180px"]}
          variant="surface"
          onClick={navigateToCustomEngraving}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
           <GiLaserPrecision />
          <Box display={["none", "inline"]}>Custom Engraving</Box>
        </Button>
      </Box>
    </Box>
  );
}
