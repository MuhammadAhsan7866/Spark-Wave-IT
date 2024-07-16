import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SliderComponent from "./SliderComponent";

import ProjectsSection from "./ProjectsSection";
import HeroSlider from "./HeroSlider";
import Header from "../../core/Header/Header";
import CompanyLogos from "./CompanyLogos";
import BrainTreeAbout from "./BrainAbout";
import BrainTreeServices from "./BrainServices";
import TwoColumnLayout from "./Technologies";
import SimpleImageGrid from "./OurWork";
import BrainPortfolio from "./OurWork";
import ContactForm from "./ContactForm";
import VideoSection from "./IntroVideo";
import OfferPopup from "./OfferPopup";

const BrainIndex = () => {
  return (
    <>
      <Box maxW={"100%"} w="100%" mx="auto" position={"relative"}>
        <Box maxW={"1440px"} w="100%" mx="auto">
          <Header bg="transparent" />
        </Box>
        <Box>
          <HeroSlider />
        </Box>
        <Box>
          <CompanyLogos bg="#F4F8F8" />
        </Box>
        <Box>
          <BrainTreeAbout />
        </Box>
      
        <Box>
          <BrainTreeServices />
        </Box>
        <Box
          p={{ base: "30px", sm: "30px", md: "40px", lg: "50px", xl: "100px" }}
        >
          <TwoColumnLayout />
        </Box>
        <Box>
          <BrainPortfolio />
        </Box>
        <Box>
          <Box
            backgroundImage="url(/Testimonial-Form-lyer.svg)"
            backgroundSize="cover"
            backgroundPosition="center"
            py={"100px"}
          >
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
                  >
                    What our Customers Says About Us
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
            <OfferPopup />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BrainIndex;
