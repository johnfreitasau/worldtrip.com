import {
  Text,
  HStack,
  Box,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ContinentProps } from "../../models";
import { ContinentAboutItem } from "./ContinentAboutItem";
import { IoMdInformationCircleOutline } from "react-icons/io";

export function ContinentDetail({ continent }: ContinentProps) {
  console.log("CONTINENT:", continent);

  return (
    <Flex
      as="section"
      direction="column"
      w="100%"
      maxW={1160}
      // paddingX="36"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="20"
    >
      <SimpleGrid columns={[1, null, 2]}>
        <Flex w="100%" maxW="600px" align="strech">
          <Text fontSize="2xl" color="gray.500">
            {continent.about}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <ContinentAboutItem number={continent.countries} label="countries" />
          <ContinentAboutItem number={continent.languages} label="languages" />
          <ContinentAboutItem
            number={continent.cities100}
            label="Cities + 100"
            icon={
              <Tooltip
                hasArrow
                label="Only the most popular cities are included."
                size="md"
              >
                <InfoOutlineIcon w={5} h={5} />
              </Tooltip>
            }
          />
        </Flex>
      </SimpleGrid>
      <section>
        Cities + 100
        <Grid>
          <GridItem>London</GridItem>
          <GridItem>Paris</GridItem>
          <GridItem>Rome</GridItem>
          <GridItem>Prage</GridItem>
          <GridItem>Amsterdam</GridItem>
        </Grid>
      </section>
      {/* <h1>{continent.name}</h1>
      <h1>{continent.id}</h1>
      <h1>{continent.countries}</h1> */}
    </Flex>
  );
}
