import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import VercelIcon from '../../public/vercel.svg'
import NextIcon from '../../public/next.svg'


type BannerProps = {
  purpose: string;
  imageUrl?: string;
  title1?: string;
  title2?: string;
  desc1?: string;
  desc2?: string;
  linkName: string;
  buttonText: string;
};

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}: BannerProps): JSX.Element => {
  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      m={10}
    >
      <Image alt={purpose} src={imageUrl} width={500} height={300} />
      <Box p={5}>
        <Text color={"grey.500"} fontSize={"sm"} fontWeight={"mediumn"}>
          {purpose}
        </Text>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize={"lg"} pt={3} pb={3} color={"grey.700"}>
          {desc1}
        </Text>
        <Button fontSize={"xl"}>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="Rent a home"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Appartements,Villas, Homes"
        desc2="and more"
        linkName={"/search?purpose=for-rent"}
        buttonText={"Explore Renting"}
        imageUrl={NextIcon}
      />
      {/*Fetch the properties and map over them*/}
      <Banner
        purpose="Buy a home"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Appartements,Villas, Homes"
        desc2="and more"
        linkName={"/search?purpose=for-sale"}
        buttonText={"Explore Buying"}
        imageUrl={VercelIcon}
      />
      {/*Fetch the properties and map over them*/}
    </Box>
  );
}


// export async function getStaticProps(){
//   const propertyForSale = 
// }