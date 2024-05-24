import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Coursereg from './components/course/Coursereg';
import Coursedetailfind from './components/course/Coursedetailfind';
import Coursedetailedit from './components/course/Coursedetailedit';
import Coursehome from './components/course/Coursehome';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/coursereg' element={<Coursereg/>}/>
      <Route path='/coursedetailfind' element={<Coursedetailfind/>}/>
      <Route path='coursedetailedit/:id' element={<Coursedetailedit/>}/>
      <Route path='/' element={<Coursehome/>}/>

    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
