import { Avatar, Box, Flex , Text , Image} from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import { Link } from "react-router-dom"
import Actions from "../components/Actions"
import { useState } from "react"

const UserPost = ({postImg,postTiTle}) => {
  const [liked,setLiked] = useState(false)
  return (
   <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="Mark Zuckerberg" src="ElCreador.jpg"/>
          <Box w={1} h={"full"} bg={"gray"} mb={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar 
              size={"sm"}
              name="John doe"
              src="https://bit.ly/ryan-florence"       
              position={"absolute"}    
              top={-3}
              left={5}
              padding={2}
            />

<Avatar 
              size={"sm"}
              name="Marks burns"
              src="https://bit.ly/kent-c-dodds"       
              position={"absolute"}    
              top={2}
              bottom={0}
              right={-5}
              left={15}
              padding={2}
            />

<Avatar 
              size={"xs"}
              name="Mailo garcia"
              src="https://bit.ly/dan-abramov"       
              position={"absolute"}    
              top={-3}
              bottom={0}
              left={2}
              padding={2}
              right={3}
            />

<Avatar 
              size={"sm"}
              name="Marco antonio c"
              src="https://bit.ly/code-beast"       
              position={"absolute"}    
              top={0}
              right={4}
              left={-1}
              padding={2}
            />

<Avatar 
              size={"xs"}
              name="Jorge Sanchez"
              src="https://bit.ly/sage-adebayo"       
              position={"absolute"}    
              top={0}
              left={15}
              padding={2}
            />
          </Box>
      
        </Flex>
           <Flex flex={1} flexDirection={"column"} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex w={"full"} alignItems={"center"} >
               <Text fontSize={"sm"} fontWeight={"bold"}>zuck</Text>
               <Image src="/verificado.png" w={4} h={4} ml={1}/>
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <Text fontStyle={"sm"} color={"gray"}>06/08/2024</Text>
                <BsThreeDots className="iconoFino" />
              </Flex>
            </Flex>

              <Text fontSize={"sm"}>{postTiTle}</Text>
              {postImg && (
                <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray"}>
                <Image src={postImg} w={"full"} />
              </Box>
            )}
              <Flex gap={3} my={1}>
                <Actions  liked={liked} setLiked={setLiked}/>
              </Flex>
              <Flex gap={2} alignItems={"center"}>
              </Flex>
           </Flex>
      </Flex>
   </Link>
  )
}

export default UserPost