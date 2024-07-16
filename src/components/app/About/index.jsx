import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Divider,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Header from "../../core/Header/Header";
import Ideas from "./Ideas";
import CompanyLogos from "../BrainLandingPage/CompanyLogos";
import ProjectsSection from "../BrainLandingPage/ProjectsSection";
import AboutCeo from "./Ceo";
import SliderComponent from "../BrainLandingPage/SliderComponent";
import ContactForm from "../BrainLandingPage/ContactForm";
import ProfessionalShine from "./ProfessionalShine";

const AboutPage = () => {
  const bgColor = useColorModeValue("white", "zinc.900");

  return (
    <>
      <Box bg={"white"} maxW={"100%"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          bg={bgColor}
        >
          <Box
            w="100%"
            p={4}
            position="relative" // Add position relative to enable absolute positioning inside
            backgroundImage="url('/abt.jpg')" // Replace with your image path
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            h={{ base: "30vh", md: "40vh" }} // Adjust height as needed
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(12, 30, 33, 0.8)" // Adjust overlay color and opacity
            />
            <Heading
              as="h1"
              fontFamily="Space Grotesk"
              fontSize={{ base: "36px", md: "55px" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              zIndex="1" // Ensure content appears above the overlay
            >
              About Agency
            </Heading>
          </Box>
        </Flex>
        <Box>
          <Ideas />
        </Box>
        <Box
          backgroundImage="url('/processbg.svg')"
          backgroundSize="cover"
          backgroundPosition="right"
          py={"100px"}
        >
          <CompanyLogos bg="transparent" />
          <Box py={{ base: "40px", sm: "40px", md: "100px" }}>
            <ProjectsSection />
          </Box>
          <Box pb={"100px"}>
            <AboutCeo />
          </Box>
          <Box>
            <ProfessionalShine />
          </Box>
          <Box p={{ base: "20px", md: "30px", lg: "50px", xl: "100px" }}>
            <Flex gap={"8px"} alignItems="center">
              <Image src="/gradianrbar.svg" alt="img"></Image>
              <Text
                style={{
                  background: `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "22px",
                }}
              >
                Our Testimonials
              </Text>
            </Flex>
            <Flex mt="24px" flexDirection={{ base: "column", md: "row" }}>
              <Box w={{ base: "100%", md: "50%" }}>
                <Text
                  maxW={{ base: "100%", md: "100%", lg: "524px" }}
                  color="#1A1A1A"
                  fontSize={{
                    base: "18px",
                    md: "22px",
                    lg: "32px",
                    xl: "48px",
                    xxl: "48px",
                    xxxl: "48px",
                  }}
                  fontWeight="700"
                  lineHeight={"150%"}
                  fontFamily={"Space Grotesk"}
                >
                  What our Customers Says About Us
                </Text>
              </Box>
              <Box
                w={{ base: "100%", md: "50%" }}
                display={"flex"}
                justifyContent={{ base: "start", md: "flex-end" }}
              >
                <Text
                  maxW={"470px"}
                  color="#7B7A7A"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={"30px"}
                >
                  Our clients' satisfaction is our top priority at Spark Web Digital Marketing Agency. Here's what they have to say:
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box pl={{ base: "0px", md: "100px" }}>
            <SliderComponent />
            {/* <SwiperSlider/> */}
          </Box>
          <Box
            maxW={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "1240px",
              xl: "1240px",
              xxl: "1240px",
              xxxl: "1440px",
            }}
            margin={"auto"}
            bg={"#F1F5F5"}
            borderRadius={"24px"}
            p={{
              base: "30px",
              sm: "30px",
              md: "40px",
              lg: "40px",
              xl: "60px",
              xxl: "80px",
              xxxl: "100px",
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
