// BlogCard.js
import React from 'react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const BlogCard = ({ title, description, imageUrl,Btn }) => {
  return (
    <Box
      
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      width={{ base: "100%", md: "45%", lg: "30%" }}
    >
      <Image src={imageUrl} alt={title} borderRadius="md" mb={4} />
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text noOfLines={2}>{description}</Text>
      <Button
       bg={'#F4F8F8'}
       colorScheme="teal"
       borderRadius={'100px'}
       p={'12px 20px'}
       color={'black'}
       mt={'25px'}
      >{Btn}</Button>
    </Box>
  );
};

export default BlogCard;
