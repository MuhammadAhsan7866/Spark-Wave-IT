// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton, Image, Img } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box position="relative" width="full" maxW={{ base: "100%", md: "80%", lg: "1240px" }} mx="auto" mt={{ base: "20px", md: "30px", lg: "50px" }} overflow="hidden">
      <Slider {...settings}>
        <Box>
          <Image src="/slidefrane.png" alt="Slide 1" borderRadius="md" w="100%" />
        </Box>
        <Box>
          <Image src="/slidefrane.png" alt="Slide 2" borderRadius="md" w="100%" />
        </Box>
        <Box>
          <Image src="/slidefrane.png" alt="Slide 3" borderRadius="md" w="100%" />
        </Box>
      </Slider>
    </Box>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      icon={<Img src='/arrow-circle-right.png' />}
      onClick={onClick}
      position="absolute"
      top="50%"
      right={{ base: "5px", md: "15px", lg: "30px" }}
      transform="translateY(-50%)"
      bg="transparent"
      _hover={{ bg: "transparent" }}
      zIndex="2"
      size={{ base: "sm", md: "md", lg: "lg" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      icon={<Img src='/sliderleft.png' />}
      onClick={onClick}
      position="absolute"
      top="50%"
      left={{ base: "5px", md: "15px", lg: "30px" }}
      transform="translateY(-50%)"
      bg="transparent"
      _hover={{ bg: "transparent" }}
      zIndex="2"
      size={{ base: "sm", md: "md", lg: "lg" }}
    />
  );
}

export default ImageSlider;
