import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://th.bing.com/th/id/OIG.tfnC3v_uXomC9LUw26Sr?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn"
        />
        <Box>
          <Typography variant="h4" component="h5">
            This is The Title
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
