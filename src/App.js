import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Users/>} />
  <Route path='/users/:id' element={< UserDetails/>} />
  <Route path= '/users/:id/:comments' element={<Comments />} />
</Routes>
</BrowserRouter>
   
   
  );
}

export default App;
