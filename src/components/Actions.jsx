import { Flex } from "@chakra-ui/react"
import HeartButton from "./HeartButton"
import CommentButton from "../components/CommentButton.jsx"

const Actions = () => {
    
  return (
    <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
       
      <HeartButton />
      <CommentButton />
   
     </Flex>
  )
}

export default Actions