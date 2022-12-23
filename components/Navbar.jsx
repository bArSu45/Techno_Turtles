import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

export default function Navbar() {
  return (
    <Box position='fixed' zIndex={'1'} background={"7895B2"} w={"100%"} h={"60px"} bg="#7895B2">
      <Flex
        justifyContent={"space-between"}
        w={"90%"}
        m={"auto"}
        h={"100%"}
      >
        <Box w={"20%"}>
          <Link href='/'><Image
            cursor='pointer'
            h={"100%"}
            src="/images/techno.png"
          /></Link>
        </Box>
        <Flex
          justifyContent={"space-between"}
          w={"30%"}
          align="center"
        >
          <Link href='/dashboard' ><Text cursor='pointer' fontWeight='bold' >Classes</Text></Link>
          <Link href='/chat' > <Text cursor='pointer' fontWeight='bold' >Chat with Mentors</Text></Link>
          <Link href='/auth/login' ><Text cursor='pointer' fontWeight='bold' >Login</Text></Link>
        </Flex>
      </Flex>
    </Box>
  );
}
