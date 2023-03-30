import React from "react";

import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { Typography, Box, Avatar } from "@mui/material";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useStyles } from "./styles";

type Props = {};

type SocialIconProps = {
  href: string;
  children: React.ReactNode;
};

const SocialIcons = ({ href, children }: SocialIconProps) => (
  <Link href={href}>{children}</Link>
);

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={2}
      position={"relative"}
    >
      <Box>
        <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Portfolio</Typography>
        </Link>
      </Box>

      <Box
        display={"flex"}
        gap={4}
        alignItems={"center"}
        justifyContent={"flex-start"}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            position: "absolute",
            // bottom: `-${theme.spacing()}`,
            left: theme.spacing(1),
            right: theme.spacing(1),
            top: theme.spacing(7),
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        })}
      >
        <Box>
          <Link href={"#projects"}>
            <Typography variant="body1" className={classes.link}>
              Projects
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link href={"#tech"}>
            <Typography className={classes.link}>Technologies</Typography>
          </Link>
        </Box>
        <Box>
          <Link href={"#about"}>
            <Typography className={classes.link}>About</Typography>
          </Link>
        </Box>
      </Box>

      <Box component={Box} justifyContent={"flex-end"} display={"flex"} gap={2}>
        <SocialIcons href="https://github.com">
          <AiFillGithub size={"2rem"} />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size={"2rem"} />
        </SocialIcons>
        {/* <Box display={"flex"} gap={5}>

                </Box> */}
      </Box>
    </Box>
  );
};

export default Header;
