import {
  VStack,
  Heading,
  Box,
  Image,
  Badge,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { CityCard } from "./CityCard";

export function CitiesPlus100() {
  return (
    <Box>
      <Heading fontWeight="medium" fontSize="4xl">
        Cities + 100
      </Heading>
      <VStack as="section">
        <SimpleGrid columns={[1, 2, 4]} spacing={10} width="full">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
