import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

interface TravelItemProps {
  label: string;
  image: string;
}

export function TravelItem({ label, image }: TravelItemProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} alignItems="center">
      {isMobile ? (
        <Image src={`/images/${image}.svg`} size="7rem" alt="beach" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontSize={["md", "xl", "2xl"]} fontWeight="semibold" mt="6">
        {label}
      </Text>
    </Flex>
  );
}
