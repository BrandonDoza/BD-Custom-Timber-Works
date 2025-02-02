"use client";
import { Box, Text, Image, Stack, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ProjectCard({
  id,
  title,
  image,
  price,
}: {
  id: number;
  title: string;
  image: string;
  price: string;
}) {
  const router = useRouter();

  function navigateToIndividualProject() {
    router.push(`/project/${id}`);
  }
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      textAlign="center"
      onClick={navigateToIndividualProject}
      cursor="pointer"
      width="100%"
      maxW="400px"
      height="420px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bg="white"
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        width="100%"
        height="300px"
      />
      <Stack p={4} flex="1">
        <Heading color="black" size="md">
          {title}
        </Heading>
        <Text color="black">{price}</Text>
      </Stack>
    </Box>
  );
}
