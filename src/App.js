// Reviewed By: Ulises Ortega
// The app does meet the structure requirements, having component being called on the app js, its good to see your code in a different approach to the fetch. Good implementation of the browser router. Good use of the media queries displaying different features, good job!


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdviceGenerator from './Components/AdviceGenerator/AdviceGenerator';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdviceGenerator/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
