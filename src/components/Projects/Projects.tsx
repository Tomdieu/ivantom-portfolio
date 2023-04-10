import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";

import { AiFillGithub } from "react-icons/ai";

import SectionDivider from "../global/SectionDivider";
import { projectsData } from "@/constants/projects";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Box id="projects" mb={3}>
      <SectionDivider />
      <Typography
        gutterBottom
        variant="h3"
        fontFamily={"Fira Code"}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: "2.3rem",
          },
        })}
      >
        Projects
      </Typography>
      <Grid
        container
        gap={2}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          },
        })}
      >
        {projectsData.map(
          ({ title, tags, description, image, source }, index) => (
            <Grid
              item
              md={5}
              sm={5.7}
              xs={12}
              key={index}
              sx={(theme) => ({
                cursor: "pointer",
                border: "1px solid #f5f5f5",
                backdropFilter: "blur(4px)",
                borderRadius: 1,
                backgroundColor: "rgb(177,177,177)",
                // color: "#f5f5f5",
                "&:hover": {
                  transform: "scale(1.04)",
                  transitionDelay: "1ms",
                },
              })}
            >
              {/* sx={{ backgroundColor: "#143F6D", color: "#fff" }} */}
              <Card sx={{ backgroundColor: "#143F6D", color: "#ddd" }}>
                <CardActionArea>
                  <CardContent>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Image
                        src={image || "/vercel.svg"}
                        alt="Vercel"
                        width={300}
                        height={300}
                        style={{
                          width: "100%",
                          // height: "100%",
                          objectFit: "contain",
                          maxHeight: "400px",
                        }}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      fontWeight={"bold"}
                      fontFamily={"Fira Code"}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body1" fontFamily={"Fira Code"}>
                      {description}
                    </Typography>
                    <Typography textAlign={"center"} fontFamily={"Fira Code"}>
                      Stack
                    </Typography>
                    <Box display={"flex"} flexWrap={"wrap"} gap={0.5}>
                      {tags?.map(({ label, icon }, index) => (
                        <Typography
                          key={index}
                          style={{
                            padding: 4,
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: 8,
                            border: "1px solid #f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                          variant={"caption"}
                          fontFamily={"Fira Code"}
                        >
                          {icon}
                          {label}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={source ? source : "#"}
                    target="_blank"
                    startIcon={<AiFillGithub />}
                    variant="contained"
                    size={"large"}
                    sx={{
                      borderRadius: 5,
                      backgroundColor: "black",
                      "& :active": {
                        backgroundColor: "black",
                      },
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Projects;
