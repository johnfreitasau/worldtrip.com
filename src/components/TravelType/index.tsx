import { Flex, Grid, GridItem, Center, VStack } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  return (
    <Center>
      <VStack width="100%">
        <Grid
          templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          w="100%"
          justify="space-between"
          my={["10", "32"]}
          mx="auto"
          maxW="1160px"
          flexWrap="wrap"
          gap={[1, 5]}
          justifyItems="center"
        >
          <GridItem>
            <TravelItem label="night life" image={"nightlife"} />
          </GridItem>

          <GridItem>
            <TravelItem label="beach" image={"beach"} />
          </GridItem>

          <GridItem>
            <TravelItem label="modern" image={"modern"} />
          </GridItem>

          <GridItem>
            <TravelItem label="classic" image={"classic"} />
          </GridItem>

          <GridItem>
            <TravelItem label="more" image={"more"} />
          </GridItem>
        </Grid>
      </VStack>
    </Center>
  );
}
