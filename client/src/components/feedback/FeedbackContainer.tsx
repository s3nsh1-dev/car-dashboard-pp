import { Typography, TextField, Button, Box } from "@mui/material";

const FeedbackContainer = () => {
  console.log("hello");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        p: 2,
        width: "50vw",
        margin: "0 auto",
        gap: 2,
      }}
    >
      <Typography variant='h5' fontWeight='bold'>
        Please share your valuable feedback
      </Typography>
      <TextField
        id='outlined-multiline-static'
        label='Your Feedback'
        multiline
        rows={6}
        sx={{ width: "40vw" }}
      />
      <Box>
        <Button variant='contained' color='success'>
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default FeedbackContainer;
