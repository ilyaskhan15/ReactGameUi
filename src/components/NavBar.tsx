import { HStack, Image } from "@chakra-ui/react";
import game from "../assets/Images/Game.jpeg";
import ColorMode from "./ColorMode";
const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      paddingLeft="10px"
      paddingRight="25px"
    >
      <Image src={game} boxSize="50px" borderRadius="50%"></Image>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
