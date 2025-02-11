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
      <GridItem area={"nav"} bg={"white"} color={"black"}>
        <NavBar />
      </GridItem>
      {!isHidden && (
        <GridItem area={"aside"} bg={"yellow"} color={"black"}>
          Aside Pannel
        </GridItem>
      )}
      <GridItem area={"main"} bg={"blue"} color={"black"}>
        Main Area
      </GridItem>
    </Grid>
  );
}
