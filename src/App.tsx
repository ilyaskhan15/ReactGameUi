import { Grid, useBreakpointValue, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

export default function App() {
  const isHidden = useBreakpointValue({ base: true, lg: false });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} color={"white"}>
        <NavBar />
      </GridItem>
      {!isHidden && <GridItem area={"aside"}>Aside Pannel</GridItem>}
      <GridItem area={"main"}>Main Area</GridItem>
    </Grid>
  );
}
