import React from "react";
import { Box, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image from "/404.png";
const MotionBox = motion(Box);

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      textAlign="center"
      minH="92vh"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      color="white"

    >
      <VStack spacing={8}>
        {/* Illustration */}
        <Image
          src={image}
          alt="Page Not Found"
          boxSize="300px"
          mb={4}
        />

        {/* Animated Heading */}
        <Heading
          size="2xl"
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.300, blue.300)"
          bgClip="text"
          textAlign="center"
        >
          404 - Page Not Found
        </Heading>

        {/* Description */}
        <Text fontSize="lg" maxW="lg" textAlign="center" color="whiteAlpha.800">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </Text>

        {/* Return Home Button */}
        <Button
          size="lg"
          colorScheme="teal"
          shadow="lg"
          onClick={() => navigate("/")}
          _hover={{ transform: "scale(1.05)" }}
        >
          Back to Home
        </Button>
      </VStack>
    </MotionBox>
  );
};

export default NotFound;
