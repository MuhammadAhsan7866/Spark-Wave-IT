import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";

const BrainPortfolio = () => {
  // Array of objects for each project
  const projects = [
    {
      imgSrc: "/pro1.png",
      overlayText: "Multiverse",
      link: "https://adesigndrivenguideforentrepreneurs.com/",
    },
    {
      imgSrc: "/fullet.png",
      overlayText: "Fullet Web 3 Tracking",
      link: "https://fullet-frontend-chi.vercel.app/",
    },
    {
      imgSrc: "drop.png",
      overlayText: "dropella",
      link: "https://dropella.vercel.app/",
    },
    {
      imgSrc: "/nif.png",
      overlayText: "Portugal’s Best Relocation Website",
      link: "https://nif-ayaan7776s-projects.vercel.app/",
    },
    {
      imgSrc: "/dogs.png",
      overlayText: "MYRO ",
      link: "https://myrothedog.com/",
    },
    {
      imgSrc: "/wardog.png",
      overlayText: "WarDog",
      link: "https://wardog.io/",
    },
  ];

  return (
    <Box
      p={{
        base: "30px",
        sm: "30px",
        md: "35px",
        lg: "65px",
        xl: "75px",
        xxl: "100px",
      }}
      bg={"#F1F5F5"}
    >
      <Box mb="40px">
        <Flex gap={"8px"} alignItems="center" marginBottom={"25px"}>
          <Image src="/gradianrbar.svg" alt="img"></Image>
          <Text
            style={{
              background: `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "400",
              lineHeight: "22px",
            }}
            fontSize={{ base: "14px", sm: "14px", md: "16px" }}
            fontFamily={"Space Grotesk"}
            textTransform={"uppercase"}
          >
            Recent Completed Projects
          </Text>
        </Flex>
        <Heading
          fontSize={{ base: "32px", sm: "32px", md: "40px" }}
          fontWeight={"700"}
          lineHeight={{ base: "42px", sm: "42px", md: "50px" }}
          maxW={"765px"}
          w={"100%"}
          fontFamily={"Space Grotesk"}
        >
          Our Recent Works
        </Heading>
      </Box>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }} // Set the number of columns
        gap={4} // Set the gap between grid items
      >
        {/* Map over projects array to generate Box components */}
        {projects.map((project, index) => (
          <Link key={index} href={project.link} isExternal>
            <Box
              position="relative"
              overflow="hidden"
              _hover={{ ".overlay": { opacity: 1 }, borderRadius: "20px" }}
              h={"100%"}
            >
              <Img
                src={project.imgSrc}
                alt={`Image ${index + 1}`}
                width="100%"
                borderRadius={"20px"}
                h={"100%"}
              />
              <Text
                className="overlay"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg=" linear-gradient(360deg, rgb(12 30 33 / 86%) 0%, rgb(49 123 135 / 81%) 100%)"
                color="white"
                p={"30px"}
                borderRadius="md"
                opacity={0}
                transition="opacity 0.3s ease-in-out"
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-end"}
                fontSize={"32px"}
                lineHeight={"40px"}
                fontWeight={"700"}
              >
                {project.overlayText}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default BrainPortfolio;
