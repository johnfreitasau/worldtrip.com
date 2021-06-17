import {
  VStack,
  Heading,
  Box,
  Image,
  Text,
  Flex,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { ContinentProps } from "../../models";
import { CitiesCard } from "./CitiesCard";

export function Cities({ continent }: ContinentProps) {
  console.log("CONTINENT:", continent);
  return (
    <Box pt="20" pb="8">
      <Heading fontWeight="medium" fontSize="4xl" pb="10">
        Cities +100
      </Heading>
      <VStack as="section">
        <SimpleGrid columns={[1, 2, 4]} spacing={10} width="full">
          {continent?.cities?.map((city) => (
            <CitiesCard
              id={city.id}
              name={city.name}
              country={city.country}
              code={city.code}
              image={city.image}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
