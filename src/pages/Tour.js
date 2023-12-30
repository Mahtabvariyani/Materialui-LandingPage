import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import Accordian from '../components/Accordian'

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore The World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://th.bing.com/th/id/OIG.qOE6dOK0t6KusL1mnJ1N?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt=""
          width={400}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Inventore nulla eius necessitatibus voluptatibus
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur
          doloremque repudiandae nesciunt maxime dolorum voluptate eaque vitae.
          Inventore nulla eius necessitatibus voluptatibus provident possimus
          perferendis, in reiciendis officia deserunt?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam tenetur doloremque repudiandae
          nesciunt maxime dolorum voluptate eaque vitae. Inventore nulla eius
          necessitatibus voluptatibus provident possimus perferendis, in
          reiciendis officia deserunt?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam tenetur doloremque repudiandae nesciunt maxime
          dolorum voluptate eaque vitae. Inventore nulla eius necessitatibus
          voluptatibus provident possimus perferendis, in reiciendis officia
          deserunt?{" "}
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} >
          Frequently Asked Questions
        </Typography>
        <Accordian />
      </Box>
    </Container>
  );
};

export default Tour;
