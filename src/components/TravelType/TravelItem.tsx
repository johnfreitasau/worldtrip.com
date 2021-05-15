import { Flex, Text, Image } from "@chakra-ui/react";

interface TravelItemProps {
  label: string;
  image: string;
}

export function TravelItem({ label, image }: TravelItemProps) {
  return (
    <Flex direction="column" alignItems="center">
      <Image src={`/images/${image}.svg`} size="7rem" alt="beach" />
      <Text size="6" fontWeight="semibold" mt="6">
        {label}
      </Text>
    </Flex>
  );
}
