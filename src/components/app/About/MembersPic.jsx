import React from 'react';
import { Box, SimpleGrid, Image, Text, Flex } from '@chakra-ui/react';

const TeamMember = ({ name, imageUrl, role }) => {
  return (
    <Box position="relative" overflow="hidden" borderRadius="md">
      <Image src={imageUrl} alt={name} width="100%" height="auto" />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(360deg, rgba(12, 30, 33, 0.5) 0%, rgba(49, 123, 135, 0.5) 100%)"
        opacity="0"
        transition="opacity 0.3s"
        _hover={{ opacity: 1, boxShadow: "3px 6px 15px 0px #0000001A" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={'12px'}
        cursor={'pointer'}
      >
        <Flex
            p={"32px"}
            w={"100%"}
            justifyContent={"flex-end"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            gap={"10px"}
            h={'100%'}
          >
            <Text
              color="white"
              textAlign="left"
              fontSize={"32px"}
              lineHeight={"40px"}
              fontWeight={"700"}
            >
              {name}
              <Text
                color="white"
                textAlign="left"
                fontSize={"16px"}
                lineHeight={"19px"}
                fontWeight={"400"}
              >
                {role}
              </Text>
            </Text>
          </Flex>
      </Box>
    </Box>
  );
};

const Team = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 4 }}
      spacing="20px"
      padding={{ base: '10px', md: '20px' }}
    >
      <TeamMember
        name="John Doe"
        imageUrl="/team1.png"
        role="Designer"
      />
      <TeamMember
        name="Jane Smith"
        imageUrl="/team2.png"
        role="Developer"
      />
      <TeamMember
        name="Michael Johnson"
        imageUrl="/team3.png"
        role="Manager"
      />
      <TeamMember
        name="Emily Brown"
        imageUrl="/team4.png"
        role="Marketing"
      />
    </SimpleGrid>
  );
};

export default Team;
