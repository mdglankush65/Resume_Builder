import React from "react";
import "./../css/About.css";
import { Stack, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  const Facebook = () => {
    window.open("https://www.facebook.com/");
  };
  const WhatsApp = () => {
    window.open(" https://wa.me/+918307874565");
  };
  const Twitter = () => {
    window.open("https://x.com/mdglankush565?t=NHgoniFDE6PwXzawxv0xyw&s=09");
  };
  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/ankushmudgil");
  };
  const Email = () => {
    window.open("mailto:mdglankush565@gmail.com");
  };
  const GitHub = () => {
    window.open("https://github.com/mdglankush65");
  };
  const Instagram = () => {
    window.open("https://www.instagram.com/_mr.mdgl/");
  };
  return (
    <>
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
                md: "40px",
              },
              textAlign: "justify",
            }}
          >
            {/*  About Us paragraph */}
            Resume@Builder is a free web application where you can build your
            resume instantly. Create a professional resume in minutes with ample
            of templates available. You can also upload profile avatar to the
            resumes. Once you have filled the resume fields, you get a preview
            and download option. Click download to have it to your local hard
            drive. You can update your resumes which you have created earlier
            and delete them too.
            <ul>
              <li>Build Your Resume Fast and Easy with Following steps</li>
              <ol>
                <li>Select Templete</li>
                <li>Fill deatils</li>
                <li>Your Resume is ready to download</li>
              </ol>
            </ul>
          </Typography>
          <Stack sx={{ width: 500, height: 400 }}>
            <img src="./images/about.image.jpg" alt="img" />
          </Stack>
        </Stack>

        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share Resume Builder with your friends
          </Typography>
          {/*share links */}
          <Box className="icon">
            {/* Facebook share  */}
            <FacebookIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={Facebook}
              color="primary"
            />
            {/* whatsapp share  */}
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={WhatsApp}
              color="success"
            />
            {/* twitter share  */}
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={Twitter}
              color="info"
            />
            {/* linked share  */}
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={Linkedin}
              color="primary"
            />
            {/* email share  */}
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={Email}
              color="error"
            />
            {/* github share  */}
            <GitHubIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={GitHub}
              color="black"
            />
            {/* instagram share  */}
            <InstagramIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              onClick={Instagram}
              color="error"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default About;
