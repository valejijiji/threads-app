import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import { useEffect, useState } from "react"
import Login from "./components/Login"

function App() {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Cargar comentarios del localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);

    // Cargar usuario del localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  const handleAddComment = (text) => {
    const newComment = { text, ...user };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };
  return (
      
    <Container maxW={620}>

      <Header />
      
      <Routes>        
         <Route path='/' element={<UserPage />}  />
         <Route path='/' element={<PostPage />}/>
      </Routes>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Bienvenido, {user.username}!</h1>
          <CommentForm onAddComment={handleAddComment} />
          <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
        </>)}
    </Container>
  )
}

export default App
