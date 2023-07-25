import { Telegram, Instagram, GitHub, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ m: "0 auto" }}>
      <IconButton aria-label="telegram">
        <a href="#" rel="noopener noreferrer" target="-blank">
          <Telegram sx={{ color: "gray" }} />
        </a>
      </IconButton>
      <IconButton aria-label="instagram">
        <a href="#" rel="noopener noreferrer" target="-blank">
          <Instagram sx={{ color: "gray" }} />
        </a>
      </IconButton>
      <IconButton aria-label="github">
        <a href="#" rel="noopener noreferrer" target="-blank">
          <GitHub sx={{ color: "gray" }} />
        </a>
      </IconButton>
      <IconButton aria-label="whatsapp">
        <a href="#" rel="noopener noreferrer" target="-blank">
          <WhatsApp sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};
