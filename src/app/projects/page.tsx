import { Text, Grid, Container, Box } from "@chakra-ui/react"
import ProjectCard from "@/components/projectCard"
import { projects } from "../projectData/projectData"

export default function Projects() {
    const projectsToDisplay = projects.map(project => (
        <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            price={project.price}
            description={project.description}
            size={project.size}
        />
    ));
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
                    maxW="1200px"  // Ensures grid does not stretch too wide
                    justifyItems="center" 
                >
                    {projects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </Grid>
            </Box>
        );
}