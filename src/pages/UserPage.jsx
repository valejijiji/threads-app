import { useState } from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { Divider } from "@chakra-ui/react"
 
const UserPage = () => {

  return (
    <>
      <UserHeader />
      
      <UserPost  likes={8000} postTiTle="We're bringing post insights and the ability to save multiple drafts to Threads on web. The option to schedule posts is coming soon too."  />
      <Divider  my={6}/>
      <UserPost   postImg="/dosPersonasjpeg.jpeg" postTiTle="Did a Q&A with Jensen at SIGGRAPH to talk about open source, AI agents, and smart glasses. But more importantly I got him a new black shearling  leather coat. Next we've got to get this guy a chain."/>
    </>
  )
}

export default UserPage