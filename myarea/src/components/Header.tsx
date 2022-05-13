import React, {FC} from "react";
import {AppBar, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Header: FC = () =>
    <AppBar position={"static"}>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
                MyArea
            </Typography>
        </Toolbar>
    </AppBar>
