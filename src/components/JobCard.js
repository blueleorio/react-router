// JobCard.js
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";
import BasicModal from "../components/BasicModal"; // Import your login modal component
import JobDetailModal from "../components/JobDetailModal"; // Import your job detail modal component
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [jobDetailModalOpen, setJobDetailModalOpen] = useState(false);

  const auth = useAuth();

  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();
  let location = useLocation();

  const handleLearnMore = () => {
    // Check if the user is not logged in
    if (!auth.user) {
      // Open the login modal
      setLoginModalOpen(true);
    } else {
      // If the user is logged in, navigate to the job detail page
      // Append the job ID to the URL
      navigate(`/job/${job.id}`);
      setJobDetailModalOpen(true);
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeJobDetailModal = () => {
    setJobDetailModalOpen(false);
    navigate(``);
  };

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
        <Button
          size="small"
          color="warning"
          variant="contained"
          onClick={handleLearnMore}
          component={Link}
          to={`/job/${job.id}`}
          state={{ backgroundLocation: location }}
        >
          Learn More
        </Button>
      </CardActions>
      <JobDetailModal
        open={jobDetailModalOpen}
        job={job}
        onClose={closeJobDetailModal}
      />
    </Card>
  );
};

export default JobCard;
