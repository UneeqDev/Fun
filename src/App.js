import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "180px",
    left: "60px",
  });
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setNoButtonPosition({
      top: Math.floor(Math.random() * 200),
      left: Math.floor(Math.random() * 200),
    });
  };

  const onYesClick = () => {
    setShowText(true);
  };
  return (
    <Stack
      width="100%"
      alignItems="center"
      height="100vh"
      justifyContent="center"
    >
      <Stack
        sx={{
          width: 340,
          height: 340,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showText ? (
          <Typography
            variant="p"
            fontSize="55px"
            sx={{ letterSpacing: "1px" }}
            fontWeight="600"
            textAlign="center"
          >
            I Knew It! <br />
            😂
          </Typography>
        ) : (
            
          <Stack width="100%" height="100%">
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ marginTop: "1.2rem", fontSize: "35px", fontWeight: "600" }}
            >
              Are you Dumb?
            </Typography>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "#f0f0f0",
                position: "relative",
              }}
            >
              <Stack direction="row">
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    top: noButtonPosition.top,
                    left: noButtonPosition.left,
                    "&:hover": {
                      backgroundColor: "",
                    },
                  }}
                  onMouseEnter={handleClick}
                >
                  No
                </Button>

                <Button
                  variant="contained"
                  onClick={onYesClick}
                  sx={{ position: "absolute", top: "180px", left: "180px" }}
                >
                  Yes
                </Button>
              </Stack>
            </Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default App;
