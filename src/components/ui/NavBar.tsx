"use client";

import { Box, Button, Image, Stack } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";
import { GiHammerNails } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { GiLaserPrecision } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      height={["100px", "120px"]}
      display="flex"
      alignItems="center"
      px={["4", "8"]}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Link href="/">
          <Image
            src="/images/blackLogo.svg"
            boxSize={["120px", "150px"]}
            borderRadius="full"
            fit="cover"
            alt="BD Custom Timber Works Logo - Saw Blade Outline"
          />
        </Link>
      </Box>

      {/* Hamburger Button for Mobile */}
      <Button
        aria-label="Toggle Menu"
        variant="ghost"
        display={["block", "none"]}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <Box as={IoMdCloseCircle} color="black" boxSize="30px" />
        ) : (
          <Box as={GiHamburgerMenu} color="black" boxSize="30px" />
        )}
      </Button>

      {isMobileMenuOpen && (
        <Box
          p={2}
          bg="#D1D0CE"
          width="50%"
          borderBottom="2px solid black"
          borderRight="2px solid black"
          borderRadius="3px"
          position="fixed"
          top="0"
          left="0"
          zIndex="1000"
          height="35vh"
          overflowY="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack align="center">
            <Button
              variant="solid"
              onClick={() => { navigateToProjects(); setMobileMenuOpen(false); }}
              bg="black "
              color="white"
              width="120%"
            >
              Shop
            </Button>
            <Button
              variant="solid"
              onClick={() => { navigateToContact(); setMobileMenuOpen(false); }}
              bg="black "
              color="white"
              width="120%"
            >
              Contact
            </Button>
            <Button
              variant="solid"
              onClick={() => { navigateToAbout(); setMobileMenuOpen(false); }}
              bg="black "
              color="white"
              width="120%"
            >
              About
            </Button>
            <Button
              variant="solid"
              onClick={() => { navigateToCustomEngraving(); setMobileMenuOpen(false); }}
              bg="black "
              color="white"
              width="120%"
            >
              Custom Engraving
            </Button>
          </Stack>
        </Box>
      )}

      {/* Desktop Menu */}
      <Box
        display={["none", "flex"]}
        justifyContent="flex-end"
        gap={["10px", "30px"]}
      >
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
          <Box display={["none", "inline"]}>Projects</Box>
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
          <Box display={["none", "inline"]}>Contact</Box>
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
          <Box display={["none", "inline"]}>About</Box>
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
