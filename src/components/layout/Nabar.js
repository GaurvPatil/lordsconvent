import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    justifyContent:"space-between",
    
  },
  btn:{
    color:"white" , 
    fontWeight:"bold"
  },

}));

export default function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div style={{width:"100%"}}>
      <AppBar position="static" >
        <Toolbar className={classes.root}>
          
        <Typography>LOGO</Typography>
          <div>
            <Button onClick={() => navigate("/", { replace: true })} className={classes.btn}>
              HOME
            </Button>
            <Button onClick={() => navigate("/about", { replace: true })} className={classes.btn}>
              ABOUT
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
