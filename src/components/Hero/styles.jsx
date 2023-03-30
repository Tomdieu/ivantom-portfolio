import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles((theme)=>({
    leftContainer:{

    },
    rightContainer:{
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    }
}))