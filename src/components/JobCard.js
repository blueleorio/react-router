// JobCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";

const JobCard = ({ job }) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Posted Date: {job.postedDate}
        </Typography>
        <Box>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="error"
              size="small"
              sx={{ margin: "4px" }}
            />
          ))}
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Location: {job.city}
        </Typography>
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="warning" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
