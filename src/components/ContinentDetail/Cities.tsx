import { VStack, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { ContinentProps } from "../../models";
import { CitiesCard } from "./CitiesCard";

export function Cities({ continent }: ContinentProps) {
  return (
    <Box pt="20" pb="8">
      <Heading fontWeight="medium" fontSize="4xl" pb="10">
        Cities +100
      </Heading>
      <VStack as="section">
        <SimpleGrid columns={[1, 2, 4]} spacing={10} width="full">
          {continent?.cities?.map((city) => (
            <CitiesCard
              key={city.id}
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
