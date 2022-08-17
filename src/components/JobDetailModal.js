import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../data/fetchData";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  Width: "400px",
  height: "400px",
  marginTop: "40px",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "#c5e1a5",
  borderRadius: "20px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  backgroundColor: "background.paper",
  borderRadius: 2,
  border: "none",
};

function JobDetailModal({ title, description, city, id, skills }) {
  // const { id } = useParams();
  const [singleJob, setSingleJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleJob = async () => {
      const data = await fetchData.getSingleJob(id);
      setSingleJob(data.singleJob);
    };
    fetchSingleJob();
  }, [id]);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal sx={{style}}
        open={true}
        onClose={handleCloseModal}
      >
        <CardStyle>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "#4e342e", textAlign:'center',}}
          >
            {singleJob.title}
          </Typography>
          <Divider />
          <Typography contained variant="h6" component="div">
        <Box sx={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center',
        p: 1,
        m: 1
        }}>
          {skills.slice(0,3).map(skill => <Chip label={skill} sx={{ backgroundColor:"#ef9a9a"}}  />
            )} 
            </Box>     
      </Typography>
          <Typography sx={{ color: "#6d4c41", marginTop: "30px", textAlign:"center" }} className="job-description-main">
            {description}
          </Typography>
                <Typography>{description}</Typography>
              <Typography variant="h6" component="div">
                City: {city}
              </Typography>
            </CardContent>
            </Stack>
        </CardStyle>
      </Modal>
    </div>
  );
}

export default JobDetailModal;