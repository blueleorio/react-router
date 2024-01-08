import React from "react";
import Container from "@mui/material/Container";
import { Pagination, Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import Box from "@mui/system/Box";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // Import useAuth from AuthContext

export default function HomePage() {
  const { jobData } = useAuth(); // Access jobData from AuthContext

  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container
      maxWidth="lg"
      className="container"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box mt={3} width="100%">
        <Grid container spacing={3}>
          {currentJobs.map((job) => (
            <Grid key={job.id} item xs={12} sm={6} md={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Outlet />
      <Pagination
        count={Math.ceil(jobData.length / jobsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </Container>
  );
}
