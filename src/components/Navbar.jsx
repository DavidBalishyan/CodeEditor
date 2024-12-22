import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("teal.100", "teal.600");
  const navigate = useNavigate();

  return (
    <Box
      as="nav"
      bg={bgColor}
      color={color}
      px={4}
      py={3}
      shadow="md"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/")}
            _hover={{ color: "teal.400" }}
          >
            CodeEditor
          </Text>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {["Home", "Editor", "About"].map((item, idx) => (
              <Link
                key={idx}
                onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                px={3}
                py={1}
                rounded="md"
                _hover={{ bg: hoverBg }}
                fontWeight="medium"
              >
                {item}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            mr={2}
            _hover={{ bg: hoverBg }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            icon={<HamburgerIcon />}
            display={{ md: "none" }}
            aria-label="Menu"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
