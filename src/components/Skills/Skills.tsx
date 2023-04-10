import { Box, Typography } from "@mui/material";
import React from "react";
import SectionDivider from "../global/SectionDivider";
import { DiCode, DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { frameworks, languages } from "@/constants/languages";

import { useStyles } from "./styles";

type Props = {};

const Skills = (props: Props) => {
  const classes = useStyles();
  return (
    <Box mb={4}>
      <SectionDivider />
      <Box>
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
          Skills
        </Typography>
        <Box
          sx={(theme) => ({
            display: "flex",
            gap: 5,
            justifyContent: "flex-start",
          })}
        >
          <Box flex={6}>
            <Typography variant="h5" fontWeight={"bold"}>
              Languages
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              gap={0.5}
            >
              {languages.map(({ language, icon }, index) => (
                <Box
                  display={"flex"}
                  className={classes.language}
                  key={index}
                  sx={(theme) => ({
                    display: "flex",
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: theme.spacing(1),
                    width: "fit-content",
                    padding: theme.spacing(1),
                    cursor: "pointer",
                    "& ::selection": {
                      background: "transparent",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,.4)",
                      backdropFilter: "blur(4px)",
                    },
                  })}
                >
                  {icon && icon}
                  <Typography fontFamily="Fira Code">{language}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box flex={6}>
            <Typography fontFamily="Fira Code" variant="h5" fontWeight={"bold"}>
              Frameworks
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              gap={0.5}
            >
              {frameworks.map(({ language, icon }, index) => (
                <Box
                  className={classes.language}
                  sx={(theme) => ({
                    display: "flex",
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: theme.spacing(1),
                    width: "fit-content",
                    padding: theme.spacing(1),
                    cursor: "pointer",
                    "& ::selection": {
                      background: "transparent",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,.4)",
                      backdropFilter: "blur(4px)",
                    },
                  })}
                  key={index}
                >
                  {icon && icon}
                  <Typography fontFamily="Fira Code">{language}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
