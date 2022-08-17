import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useAuth } from "../auth/AuthContext";

const CardStyle = styled(Card)(({ theme }) => ({
  Width: "400px",
  height: "400px",
  marginTop: "40px",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "#c5e1a5",
  borderRadius: "20px",
}));

function JobCard({ description, skills, id, title }) {
  const auth = useAuth;
  const navigate = useNavigate();
  let location = useLocation();
  const handleClick = (event) => {
    if (auth.user) {
      navigate(`/job/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
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
            {title}
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
        </CardContent>
        <Button
          variant="contained"
          component={Link}
          to={`/job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{ width: "130px", backgroundColor: "#ff6f00", marginBottom:"20px" }}
          onClick={handleClick}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
};

export default JobCard;