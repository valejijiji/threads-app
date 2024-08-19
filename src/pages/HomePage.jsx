import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Link to={"/markzuckerberk"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>visit profile page</Button>
      </Flex>
    </Link>
  )
}

export default HomePage;