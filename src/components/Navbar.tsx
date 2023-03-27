import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from "react-icons/bs";
import { FiKey } from 'react-icons/fi'

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <Flex p={2} borderBottom={"1px"} borderColor={"green.500"}>
            <Box fontSize={"3xl"} color={"blue.400"}>
                <Link href={"/"} >
                    Realtor
                </Link>

            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant={'outline'} color={'red.400'} />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link href="/" passHref>
                            <MenuItem>Rent A Home</MenuItem>
                        </Link>
                        <Link href="/" passHref>
                            <MenuItem>Buy A Home</MenuItem>
                        </Link>
                        <Link href="/" passHref>
                            <MenuItem>Contact</MenuItem>
                        </Link>

                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar