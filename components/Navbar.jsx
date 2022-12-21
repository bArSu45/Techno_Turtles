import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box background={"7895B2"} w={"100%"} h={"60px"} bg="#7895B2">
      <Flex
        justifyContent={"space-between"}
        w={"90%"}
        m={"auto"}
        border={"1px"}
        h={"100%"}
      >
        <Box w={"20%"}>
          <Image
            h={"100%"}
            src="https://res.cloudinary.com/dehubjbqm/image/upload/v1671645479/Logo_juatbw.png"
          />
        </Box>
        <Flex
          justifyContent={"space-between"}
          w={"60%"}
          align="center"
          border={"1px solid red"}
        >
          <Text>Acadamics</Text>
          <Text>Classes</Text>
          <Text>About</Text>
          <Text>
            Login/Signup <IoMdLogIn />
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
