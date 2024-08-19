import { Flex, useColorMode , Image } from "@chakra-ui/react"

const Header = () => {

 const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
     <Image 
        cursor={"pointer"}
        alt='logazos'
        w={9}
        src ={colorMode === "dark" ? "IconoParaEmos.png" : "IconoParaNoEmos.png"}
        onClick={toggleColorMode}
     />
    </Flex>
  )
}

export default Header