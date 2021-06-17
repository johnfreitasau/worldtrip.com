import { Flex, Image, IconButton, Grid, Box } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface HeaderProps {
  isContinent?: boolean;
}

export function Header({ isContinent = false }: HeaderProps) {
  return (
    <Flex as="header" w="100%" padding="4" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3,1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        <Box>
          {isContinent && (
            <Link href="/" passHref>
              <IconButton
                aria-label="Back to Home"
                icon={<ChevronLeftIcon />}
                fontSize={["20", "20", "24"]}
                justifySelf="start"
                variant="unstyled"
                mr="2"
              />
            </Link>
          )}
        </Box>
        <Image
          src="/images/logo.svg"
          alt="WorldTrip"
          marginY="1.688"
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
}
