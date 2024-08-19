import { Flex , Text , Avatar, Image, Box, Divider, Button } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "../components/Actions"
import { useState } from "react"
import Comments from "../components/Comments"

const UserPost2 = () => {
    const [liked , setLiked] = useState(false)
  return (
    <>
     <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
           <Avatar src='/ElCreador.jpg' size={"md"} name='Mark ' />
           <Flex>
        <a href="/UserPost">
             <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
         </a> 
            <Image src="/verificado.png" w={4} ml={2} h={4} my={1}/>
           </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray"}>10d</Text>
          <BsThreeDots className="iconoFino" />
        </Flex>
      </Flex>

      <Text my={3} >Did a Q&A with Jensen at SIGGRAPH to talk about open source, AI agents, and smart glasses. But more importantly I got him a new black shearling  leather coat. Next we've got to get this guy a chain</Text>

      <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray"}>
        <Image src="/dosPersonasjpeg.jpeg" w={"full"}/>
      </Box>

      <Flex gap={3} my={3}>
         <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
         <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray"}></Box>
         <Text color={"gray"} fontSize={"small"}>{1000+ (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider  my={4}/>

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"xl"} color={"gray"}>Hey aqui puedes comentar y ver los comentarios de los demas! </Text> 
        </Flex>
        <Button my={4}>Get</Button>
      </Flex>

      <Divider  my={4}/>
      <Comments/>
    </>
  )
}

export default UserPost2