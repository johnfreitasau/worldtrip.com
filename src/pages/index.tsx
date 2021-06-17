import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelType";
import { Carousel } from "../components/Carousel";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import { ContinentsProps } from "../models";

export interface HomeProps {
  continents: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
  }[];
}

export interface ContinentProps {
  continent: {
    id: string;
    name: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: City[];
  };
}

type City = {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
};

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
