import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { DiDatabase, DiReact } from "react-icons/di";
import { CgDesktop } from "react-icons/cg";
import SectionDivider from "../global/SectionDivider";
import { technologyData } from "@/constants/technology";

type Props = {};

const Technology = (props: Props) => {
  return (
    <Box id="tech" marginBottom={5}>
      <SectionDivider />
      <Typography
        variant="h3"
        fontFamily={"Fira Code"}
        gutterBottom
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: "2.3rem",
          },
        })}
      >
        Technologies
      </Typography>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          color={"#ccc"}
          pl={1}
          textAlign={"left"}
          fontFamily={"Fira Code"}
        >
          I have work with a range of technologies in the web development <br />
          world. From Back-end to Front-End
        </Typography>
        <Grid
          container
          mb={2}
          gap={3}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              p: 0,
            },
            p: 2,
          })}
        >
          {technologyData.map(({ icon, title, desc1, desc2 }, index) => (
            <Grid
              item
              md={3.4}
              sm={4.8}
              xs={5}
              mb={2}
              key={index}
              sx={(theme) => ({
                cursor: "pointer",
                backgroundColor: "rgba(255,255,255,.2)",
                backdropFilter: "blur(4px)",
                boxShadow: "1px 1px  #f5f5f5",
                padding: 1,
                borderRadius: 1,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: ".7",
                },
              })}
            >
              <Box sx={{ borderRadius: 4 }}>
                {icon}
                <Typography
                  fontFamily={"Fira Code"}
                  fontWeight={"bold"}
                  variant="h5"
                >
                  {title}
                </Typography>
                <Typography
                  fontFamily={"Fira Code"}
                  variant="caption"
                  color={"#ddd"}
                >
                  {desc1}
                  <br /> {desc2}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Technology;
