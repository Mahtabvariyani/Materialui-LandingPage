import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({tour}) => {
  return (
    <Grid item xs={3}>
   <ThemeProvider theme={theme}>
   <Paper elevation={3}>
        <img
          className="img"
          src={tour.image}
        />
        <Box paddingX={1}>
          <Typography variant="h6" component="h5">
            {tour.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={1}>
              {tour.duration} Hours
            </Typography>
          </Box>
          <Box
            marginTop={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              readOnly
              name="half-rating"
              defaultValue={4.5}
              precision={0.5}
              size="small"
            />

            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={0.5}>
              ({tour.numberOfReviews} Reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              {tour.price}$
            </Typography>
          </Box>
        </Box>
      </Paper>
   </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
