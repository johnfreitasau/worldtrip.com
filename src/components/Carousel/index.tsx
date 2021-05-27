import {
  Divider,
  Center,
  Text,
  Flex,
  Image,
  Box,
  VStack,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";
import { ContinentsProps } from "../../models";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Carousel({ continents }: ContinentsProps) {
  console.log("CONTINENTS_CAROUSEL:", continents);

  return (
    <Flex as="section" direction="column" w="100%" align="center">
      <Divider w="90px" borderColor="gray.500" size="2px" />
      <Flex direction="column" w="100%">
        <Heading fontWeight="medium" py="4rem">
          <VStack>
            <Text>Let's go?</Text>
            <Text>So, choose your continent.</Text>
          </VStack>
        </Heading>
        <Flex px="100" direction="column" mb="10" position="relative">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            // className="mySwiper"
          >
            {continents.map((continent) => (
              <SwiperSlide key={continent.id}>
                <Link href={`/continent/${continent.id}`} passHref>
                  <ChakraLink color="transparent">
                    <Flex
                      as="section"
                      w="100%"
                      h="335px"
                      justify="space-around"
                      align="center"
                    >
                      <Image src={continent.bannerImage} alt="asia" />
                      <VStack
                        spacing={5}
                        maxW={520}
                        align="center"
                        justify="center"
                        color="gray.50"
                        position="absolute"
                      >
                        <Heading fontWeight="500">
                          <Text>{continent.name}</Text>
                        </Heading>
                        <Text fontSize="1.25rem">{continent.call}</Text>
                      </VStack>
                    </Flex>
                  </ChakraLink>
                </Link>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
              <Flex
                as="section"
                w="100%"
                h="335px"
                justify="space-around"
                align="center"
              >
                <Image src="images/africa.jpeg" alt="africa" />

                <VStack
                  spacing={5}
                  maxW={520}
                  align="center"
                  justify="center"
                  color="gray.50"
                  position="absolute"
                >
                  <Heading fontWeight="500">
                    <Text>Africa</Text>
                  </Heading>
                  <Text fontSize="1.25rem">The oldest continent.</Text>
                </VStack>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Image src="images/europe.jpeg" alt="asia" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="images/north-america.jpeg" alt="asia" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="images/south-america.jpeg" alt="asia" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="images/oceania.jpeg" alt="asia" />
            </SwiperSlide> */}
          </Swiper>
        </Flex>
      </Flex>
    </Flex>
  );
}
