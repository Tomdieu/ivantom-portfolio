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
          <Typography variant="h4" fontFamily={'Fira Code'}>Portfolio</Typography>
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
            <Typography fontFamily={'Fira Code'} className={classes.link}>Projects</Typography>
          </Link>
        </Box>
        <Box>
          <Link href={"#tech"}>
            <Typography fontFamily={'Fira Code'} className={classes.link}>Technologies</Typography>
          </Link>
        </Box>
        <Box>
          <Link href={"#about"}>
            <Typography fontFamily={'Fira Code'} className={classes.link}>About</Typography>
          </Link>
        </Box>
      </Box>

      <Box component={Box} justifyContent={"flex-end"} display={"flex"} gap={2}>
        <SocialIcons href="https://github.com/tomdieu">
          <AiFillGithub size={"2rem"} />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/tomdieu-ivan-6086701b4">
          <AiFillLinkedin size={"2rem"} />
        </SocialIcons>
      </Box>
    </Box>
  );
};

export default Header;
