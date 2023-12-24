// import "./App.css";
import React from "react";
import SearchAppBar from "./components/Appbar";
import Container from "@mui/material/Container";
import { Pagination, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import JobCard from "./components/JobCard"; // Update the import statement
import Box from "@mui/system/Box";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [jobData, setJobData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jobs.json"); // Assuming it's in the public folder
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar title="Job Searching" />
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
        <Pagination
          count={Math.ceil(jobData.length / jobsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Container>
    </ThemeProvider>
  );
}
