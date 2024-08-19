import { Avatar, Box, Flex, VStack, Text, MenuButton, Menu, Portal, MenuItem, MenuList, useToast } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";

 const UserHeader = () => {

const toast = useToast()

    const URL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() =>{
         toast({
            title: 'Link',
            description: "Link copiado correctamente!",
            status: 'success',
            duration: 3000,
            isClosable: true,
         })
        }
    )}

  return (
    <VStack gap={4} alignItems={"start"}>
       <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}> Mark Zuckerberg</Text>
            <Flex gap={2} alignItems={"center"}>
               <Text fontSize={"sm"}>Zuck</Text>
            </Flex>
        </Box>
        <Box>
            <Avatar
              name="Mark Zuckerberg"
              src="/ElCreador.jpg"
              boxSize='100px'
              size={{base:"md", 
                    md:"xl",
                    
              }}
            />
        </Box>
       </Flex>

       <Text>
           co-founder, executive chairman and CEO of meta plataforms
       </Text>

       <Flex w={"full"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray"}>4,4mill. seguidores</Text>
            <Box w={1} h={1} bg={"gray"} borderRadius={"full"}></Box>
            <Link color={"gray"}>instagram.com</Link>
          </Flex>
          <Flex>
            <Box className="iconoFino">
              <a href="https://www.instagram.com/zuck/">
               <BsInstagram size={24} cursor={"pointer"}/>
              </a> 
            </Box>
            <Box className="iconoFino">
                <Menu>
                <MenuButton>
               <CgMoreO size={24} cursor={"pointer"} />
                </MenuButton>
                <Portal>
                <MenuList className="cajita" bg={"gray.dark"}>
                  <MenuItem color={"gray"} bg={"gray.dark"} onClick={URL}>Copiar enlace</MenuItem>
                  <MenuItem color={"gray"} bg={"gray.dark"}>informacion de este perfil</MenuItem>
                  <MenuItem color={"gray"}  bg={"gray.dark"}>Silenciar</MenuItem>
                  <MenuItem color={"red"} bg={"gray.dark"}>Bloquear</MenuItem>
                  <MenuItem color={"red"} bg={"gray.dark"}>Reportar</MenuItem>
                </MenuList>
                </Portal>
                </Menu>
            </Box>
          </Flex>
       </Flex>

       <Flex w={"full"}>
          <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"pointer"}>
            <Text fontWeight={"bold"}>Hilos</Text>
          </Flex>
          <Flex flex={1}  borderBottom={"1.5px solid gray"} justifyContent={"center"} pb={3} cursor={"pointer"}>
            <Text fontWeight={"bold"} color={"gray"}>Respuestas</Text>
          </Flex>
       </Flex>
    </VStack>
  )
}

export default UserHeader;