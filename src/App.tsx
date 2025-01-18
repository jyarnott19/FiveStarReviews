import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg">
        Aside
      </GridItem>

      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
