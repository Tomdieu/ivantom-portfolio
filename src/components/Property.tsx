import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'

import millify from "millify";

import React from 'react'

type Props = {
    id: number;
    coverPhoto: object;
    price: number;
    rentFrequency: string;
    rooms: number;
    title: string;
    bath: number;
    area: string;
    agency: object;
    isVerified: boolean;
}

const Property = (props: Props) => {
    const { id, title, coverPhoto, price, rentFrequency, bath, rooms, agency, area, isVerified } = props
    return (
        <Link href={`/property/${id}`} passHref>
            <Flex flexWrap={"wrap"} w={420} p={5} pt={0} justifyContent={"flex-start"} cursor={"pointer"}>
                <Box>
                    <Image src={coverPhoto ? coverPhoto : ""} alt="House" />
                </Box>
                <Box w="full">
                    <Flex padding={"2"} alignItems={"center"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"}>
                            <Box paddingRight={"3"} color={"green.400"}>{isVerified && <GoVerified />}</Box>
                            <Text fontWeight={"bold"} fontSize={"lg"}>FCFA {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size={"sm"} src={agency?.logo} />
                        </Box>
                    </Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} width={"250px"} color={"blue.400"}>
                        {rooms} <FaBed />| {bath} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize={"lg"}>
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}

export default Property