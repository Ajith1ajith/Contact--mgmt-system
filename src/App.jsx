import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ViewContact from './Components/ViewContact';
import AddContact from './Components/AddContact';


function App() {


  return (
    <>
    <h1>This is new branch b1</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddContact/>} />
      <Route path="/ViewContact" element={<ViewContact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
