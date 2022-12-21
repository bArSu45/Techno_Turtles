import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box background={"7895B2"} w={"100%"} h={"80px"} bg="#7895B2">
      <Box w={"90%"} m={"auto"} border={"1px"} h={"100%"}>
        <Image
          h={"100%"}
          src="https://res.cloudinary.com/dehubjbqm/image/upload/v1671645479/Logo_juatbw.png"
        />
      </Box>
    </Box>
  );
}
