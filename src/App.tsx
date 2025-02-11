import { Grid, useBreakpointValue, GridItem } from "@chakra-ui/react";

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
        Navigation Bar
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
