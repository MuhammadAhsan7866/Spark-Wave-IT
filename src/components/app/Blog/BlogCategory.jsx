import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Grid,
} from "@chakra-ui/react";

const blogCategories = [
  {
    category: "Development",
    blogs: [
      {
        title: "How to Build a Stunning Website with Webflow",
        description: "Learn the best tips and tricks for creating a visually striking website.",
        image: "/blogimg.png",
        alt: "Blog image 1",
      },
      {
        title: "How to Create Engaging Content for Your Audience",
        description: "Discover proven strategies for creating content that resonates with your audience.",
        image: "/blog2.png",
        alt: "Blog image 2",
      },
      {
        title: "How to Build a Successful Marketing Campaign",
        description: "Find out how Webflow can take your online store to the next level.",
        image: "/blog3.png",
        alt: "Blog image 3",
      },
    ],
  },
  {
    category: "Consulting",
    blogs: [
      {
        title: "How to Build a Stunning Website with Webflow",
        description: "Learn the best tips and tricks for creating a visually striking website.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 1",
      },
      {
        title: "How to Create Engaging Content for Your Audience",
        description: "Discover proven strategies for creating content that resonates with your audience.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 2",
      },
      {
        title: "How to Build a Successful Marketing Campaign",
        description: "Find out how Webflow can take your online store to the next level.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 3",
      },
    ],
  },
  {
    category: "Business",
    blogs: [
      {
        title: "How to Build a Stunning Website with Webflow",
        description: "Learn the best tips and tricks for creating a visually striking website.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 1",
      },
      {
        title: "How to Create Engaging Content for Your Audience",
        description: "Discover proven strategies for creating content that resonates with your audience.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 2",
      },
      {
        title: "How to Build a Successful Marketing Campaign",
        description: "Find out how Webflow can take your online store to the next level.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 3",
      },
    ],
  },
  {
    category: "Technology",
    blogs: [
      {
        title: "How to Build a Stunning Website with Webflow",
        description: "Learn the best tips and tricks for creating a visually striking website.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 1",
      },
      {
        title: "How to Create Engaging Content for Your Audience",
        description: "Discover proven strategies for creating content that resonates with your audience.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 2",
      },
      {
        title: "How to Build a Successful Marketing Campaign",
        description: "Find out how Webflow can take your online store to the next level.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 3",
      },
    ],
  },
  {
    category: "UI/UX",
    blogs: [
      {
        title: "How to Build a Stunning Website with Webflow",
        description: "Learn the best tips and tricks for creating a visually striking website.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 1",
      },
      {
        title: "How to Create Engaging Content for Your Audience",
        description: "Discover proven strategies for creating content that resonates with your audience.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 2",
      },
      {
        title: "How to Build a Successful Marketing Campaign",
        description: "Find out how Webflow can take your online store to the next level.",
        image: "https://placehold.co/600x400",
        alt: "Blog image 3",
      },
    ],
  },
];

export default function Banner() {
  return (
    <Box>
 <Box mx="auto" maxW="100%">
      <Heading as="h2" size="xl" mb={{ base: "4", md: "6" }} textAlign="center">
        Blogs Categories
      </Heading>
      <Tabs variant="enclosed" isFitted>
        <TabList mb={{ base: "4", md: "6" }} gap={{ base: "10px", md: "30px" }}>
          {blogCategories.map((category, index) => (
            <Tab
              key={index}
              _selected={{
                borderBottomColor: "#0C1E21",
                color: "#0C1E21",
                fontFamily: "Space Grotesk",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {category.category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {blogCategories.map((category, index) => (
            <TabPanel key={index} p={'15px 0px'}>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "1fr 1fr",
                  lg: "repeat(3, 1fr)",
                }}
                gap="6"
              >
                {category.blogs.map((blog, idx) => (
                  <Box key={idx} bg="white" rounded="lg" shadow="md" overflow="hidden">
                    <Image
                      src={blog.image}
                      alt={blog.alt}
                      w="full"
                      objectFit="cover"
                    />
                    <Box p="4">
                      <Heading as="h3" size="md" mb="2">
                        {blog.title}
                      </Heading>
                      <Text color="gray.600" mb="4">
                        {blog.description}
                      </Text>
                      <Button
                        bg="gray.200"
                        color="gray.800"
                        px="4"
                        py="2"
                        rounded="full"
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
    </Box>
   
  );
}
