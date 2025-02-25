import { Box, Typography } from "@mui/material";

const SiteDescription = () => {
  return (
    <Box sx={{ margin: "auto", padding: "1rem 3rem" }}>
      <Typography variant='h4' fontWeight='bold'>
        knowYourGarage! ~
        <Typography variant='h6' component={"span"}>
          &nbsp; Your Vehicle Research Companion
        </Typography>
      </Typography>
      <Typography textAlign={"justify"} sx={{ marginTop: "1rem" }}>
        knowYourGarage delivers comprehensive vehicle information tailored to
        your specific needs. Whether you search by model name or brand, our
        advanced platform provides detailed specifications, performance metrics,
        and expert insights to help you make informed decisions about your next
        vehicle. Our extensive database covers everything from fuel efficiency
        and safety ratings to maintenance costs and real-world owner
        experiences, ensuring you have all the crucial information in one place.
        We transform complex automotive data into clear, actionable insights,
        helping you determine if a particular model aligns with your lifestyle,
        budget, and preferences. With knowYourGarage, make confident decisions
        about your automotive future through reliable, up-to-date information
        and detailed analysis.
      </Typography>
    </Box>
  );
};

export default SiteDescription;
