import { HStack, Image, Text } from "@chakra-ui/react";
import game from "../assets/Images/Game.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={game} boxSize="50px" borderRadius="50%"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
