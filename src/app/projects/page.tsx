import { Grid, Box } from "@chakra-ui/react";
import ProjectCard from "@/components/projectCard";
import { projects } from "../projectData/projectData";

export default function Projects() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      width="100vw"
      p={4}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        width="100%"
        maxW="1200px"
        justifyItems="center"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Grid>
    </Box>
  );
}
