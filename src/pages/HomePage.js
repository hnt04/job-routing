import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { getJobs } from "../data/fetchData";

const MainPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: "center",
  },
}));

function HomePage({jobs,pagesTotal}) {
  // const [jobs, setJobs] = useState([]);
  // const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    getJobs(page,q)
  }, []);

  return (
    // <Container sx={{ p: 3 }} maxWidth="lg">
    //   {jobs.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid key={job.id} item lg={4} md={4} sm={12}> 
                <JobCard
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  skills={job.skills}
                />
              </Grid>
            ))}
          </Grid>
          <MainPagination
            sx={{ marginTop: "15px" }}
            count={pagesTotal}
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </>
    //   ) : (
    //     <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
    //       Sorry, there are no result!
    //     </Typography>
    //   )}
    // </Container>
  );
}

export default HomePage;