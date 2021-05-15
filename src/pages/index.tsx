import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelType";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Carousel />
    </>
  );
}
