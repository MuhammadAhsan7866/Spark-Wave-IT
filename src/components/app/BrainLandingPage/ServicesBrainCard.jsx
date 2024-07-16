import React, { useState } from "react";
import { Box, Flex, Text, Img, Link } from "@chakra-ui/react";

const Card = ({ title, description, icon, skills, skills2, skills3, tick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      p="30px"
      maxW={{base:'100%',sm:'100%',md:'325px',lg:'502px',lg:'388px',xxl:'388px',xxxl:'502px'}}
      borderWidth="1px"
      borderColor="#E4E4E4"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      bg="white"
      cursor={'pointer'}
      sx={{
        transition: 'background-color 0.3s, color 0.3s',
        _hover: {
          bg: '#003640',
          color: 'white',
          '.hover-text': {
            color: 'white',
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box align="center">
        <Flex mb="25px">
          <Img src={isHovered ? "/Maskwhite.png" : icon} />
        </Flex>
        {/* <Img src="/Maskwhite.png"/> */}
        <Flex>
          <Text ml="2" fontSize={{base:'18px',sm:'18px',md:'18px'}} fontWeight="bold" textAlign="left" className="hover-text">
            {title}
          </Text>
        </Flex>
        
      </Box>
      <Box borderBottom="1px solid #E4E4E4" pb="20px">
        <Text mt="2" color="gray.600" className="hover-text">
          {description}
        </Text>
      </Box>

      <Box pt="25px">
        <Flex flexDirection="column" gap="18px">
          <Flex alignItems="center" gap="18px">
            <Img src={tick} />
            <Text className="hover-text">{skills}</Text>
          </Flex>
          <Flex alignItems="center" gap="18px">
            <Img src={tick} />
            <Text className="hover-text">{skills2}</Text>
          </Flex>
          <Flex alignItems="center" gap="18px">
            <Img src={tick} />
            <Text className="hover-text">{skills3}</Text>
          </Flex>
        </Flex>
      </Box>
      <Box mt="18px">
        <Link color="#7B7A7A" textDecoration="underline" className="hover-text">
          Read More
        </Link>
      </Box>
    </Box>
  );
};

const CardList = () => {
  return (
    <Flex
      flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}
      flexWrap={{base:'nowrap',sm:'nowrap',md:'wrap',lg:'wrap'}}
      gap="35px"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
      pb="30px"
    >
      <Card
        icon="/coding.png"
        title="Web Design & Development"
        description="Your website is your digital ambassador, speaking volumes to your visitors."
        tick="tickmark.png"
        skills="Custom Website Design"
        skills2="WordPress Design"
        skills3="Laravel Development"
      />
      <Card
        icon="/coding.png"
        title="SEO Optimization"
        description="SEO offers comprehensive search engine marketing solutions for clients."
        tick="tickmark.png"
        skills="Analyze a web site"
        skills2="On-Page Optimization"
        skills3="Off-Page Optimization"
      />
      <Card
        icon="/coding.png"
        title="SEO Optimization"
        description="SEO offers comprehensive search engine marketing solutions for clients."
        tick="tickmark.png"
        skills="Analyze a web site"
        skills2="On-Page Optimization"
        skills3="Off-Page Optimization"
      />
      <Card
        icon="/coding.png"
        title="SEO Optimization"
        description="SEO offers comprehensive search engine marketing solutions for clients."
        tick="tickmark.png"
        skills="Analyze a web site"
        skills2="On-Page Optimization"
        skills3="Off-Page Optimization"
      />
      <Card
        icon="/coding.png"
        title="SEO Optimization"
        description="SEO offers comprehensive search engine marketing solutions for clients."
        tick="tickmark.png"
        skills="Analyze a web site"
        skills2="On-Page Optimization"
        skills3="Off-Page Optimization"
      />
      <Card
        icon="/coding.png"
        title="SEO Optimization"
        description="SEO offers comprehensive search engine marketing solutions for clients."
        tick="tickmark.png"
        skills="Analyze a web site"
        skills2="On-Page Optimization"
        skills3="Off-Page Optimization"
      />
    </Flex>
  );
};

export default CardList;
