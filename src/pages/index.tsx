import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelType";
import { Carousel } from "../components/Carousel";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import { ContinentsProps } from "../models";

export default function Home({ continents }: ContinentsProps) {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Carousel continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api
    .get("/continents")
    .then((response) => response.data);

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, //24 hrs
  };
};
