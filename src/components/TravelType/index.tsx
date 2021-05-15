import { Flex, Image } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  return (
    <Flex
      justifyContent="space-around"
      mx="63"
      marginY="32"
      alignItems="flex-end"
    >
      <TravelItem label="night life" image={"nightlife"} />
      <TravelItem label="beach" image={"beach"} />
      <TravelItem label="modern" image={"modern"} />
      <TravelItem label="classic" image={"classic"} />
      <TravelItem label="more" image={"more"} />
    </Flex>
  );
}
