import React from "react";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import SectionDivider from "../global/SectionDivider";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box mt={3}>
      <hr style={{ height: 2, backgroundColor: "#fff" }} />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={5}
        mt={5}
        mb={3}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Box
          display={"flex"}
          gap={5}
          flexWrap={"wrap"}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              justifyContent: "flex-start",
            },
          })}
        >
          <Box>
            <Typography fontWeight={"bold"} fontFamily={"Fira Code"}>
              Tomdieu Ivan
            </Typography>
            <span>Yaounde,CM</span>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} fontFamily={"Fira Code"}>
              Call
            </Typography>
            <Link href="tel:+237650039773">+237 650 039 773</Link>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} fontFamily={"Fira Code"}>
              Email
            </Typography>
            <Link href="mailto:ivan.tomdieu@gmail.com">
              ivan.tomdieu@gmail.com
            </Link>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={5}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              alignItems: "center",
              justifyContent: "space-between",
              gap: theme.spacing(1),
            },
          })}
        >
          <Link href="https://github.com/Tomdieu" target="_blank">
            <AiFillGithub size={32} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/tomdieu-ivan-6086701b4"
          >
            <AiFillLinkedin size={32} />
          </Link>
        </Box>
      </Box>
      <Typography textAlign={"center"} gutterBottom>
        Copyright &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
