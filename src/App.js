import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from './components/Comments';
import Users from './components/Users';
import Todos from './components/Todos';
import Photos from './components/Photos';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Products from './components/Products';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here */}
      <Navbar/>
     <Routes>
     <Route path="/comments" element={<Comments />}/>
     <Route path="/users" element={<Users />}/>
     <Route path="/todos" element={<Todos />}/>
     <Route path="/photos" element={< Photos/>}/>
     <Route path="/posts" element={<Posts />}/>
     <Route path="/products" element={<Products />}/>
     <Route path='*'  element={<NotFound /> } />
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
