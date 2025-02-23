import { Box, Typography, Button } from "@mui/material";

const UserSearchContainer = () => {
  return (
    <Box
      component='fieldset'
      sx={{
        padding: "1rem",
        maxWidth: "600px",
      }}
    >
      <Typography
        component='legend'
        sx={{
          textAlign: "center",
          padding: "0.5rem 1rem",
          border: "1px solid",
        }}
      >
        Find Your Car
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ marginRight: "1rem" }}>
            Search Your Model By ?
          </Typography>
          <Box component='select' sx={{ width: "150px" }}>
            <Box component='option'>Select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
            <Box component='option'>select</Box>
          </Box>
        </Box>
        <Box>
          <Typography component='label'>
            <Typography component='input' />
          </Typography>
        </Box>
        <Box>
          <Button variant='contained'>Search</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserSearchContainer;
