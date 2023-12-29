import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Face from './Face';
import Middle from './Middle';
import End from './End';
import Update from './Update';

function App() {
  const api ="https://65796e9df08799dc8046ef23.mockapi.io/details/books";
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Face api={api}/>}/>
          <Route path='/middle' element={<Middle api={api}/>}/>
          <Route path='/end' element={<End api={api}/>}/>
          <Route path='/update' element={<Update api={api}/>}/>
        </Routes>
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
