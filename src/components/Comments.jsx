import { Avatar, Divider, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"

const Comments = () => {
  const {liked, setliked} = useState(false)
    return (
    <>
     <Flex gap={4} py={2} my={2} w={"full"}>
       <Avatar src="https://bit.ly/ryan-florence" size={"sm"}/>   
       <Flex gap={1} w={"full"} flexDirection={"column"}>
         <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>John Moe</Text>
          <Flex>
             <Text fontSize={"sm"} color={"gray"} left={2}>2h</Text>  
             <BsThreeDots />
          </Flex>   
         </Flex>
         <Text> Hey! you are too amazing</Text>
         <Actions liked={liked} setLiked={setliked} />
         <Text fontSize={"sm"} color={"gray"}>
           {100 + (liked ? 1 : 0)} likes
         </Text>
       </Flex>
     </Flex>    

    <Divider my={4} /> 

    <Flex gap={4} py={2} my={2} w={"full"}>
       <Avatar src="https://bit.ly/kent-c-dodds" size={"sm"}/>   
       <Flex gap={1} w={"full"} flexDirection={"column"}>
         <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Mark Burns</Text>
          <Flex>
             <Text fontSize={"sm"} color={"gray"} left={2}>6d</Text>  
             <BsThreeDots />
          </Flex>   
         </Flex>
         <Text>JAJAJA</Text>
         <Actions liked={liked} setLiked={setliked} />
         <Text fontSize={"sm"} color={"gray"}>
           {80 + (liked ? 1 : 0)} likes
         </Text>
       </Flex>
     </Flex>    

     <Divider my={4} /> 

    <Flex gap={4} py={2} my={2} w={"full"}>
       <Avatar src="https://bit.ly/dan-abramov" size={"sm"}/>   
       <Flex gap={1} w={"full"} flexDirection={"column"}>
         <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Mailo Garcia</Text>
          <Flex>
             <Text fontSize={"sm"} color={"gray"} left={2}>9d</Text>  
             <BsThreeDots />
          </Flex>   
         </Flex>
         <Text>En donde es eso?? </Text>
         <Actions liked={liked} setLiked={setliked} />
         <Text fontSize={"sm"} color={"gray"}>
           {300 + (liked ? 1 : 0)} likes
         </Text>
       </Flex>
     </Flex>    

    </>
  )
}

export default Comments