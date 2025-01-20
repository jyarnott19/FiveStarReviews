import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/FiveStars3.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <HStack>
        <Image src={logo} alt="logo" boxSize="60px" />
        <Text fontSize="2xl">Five Star Reviews</Text>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
