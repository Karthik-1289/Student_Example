import Studentdetails from './Components/Studentdetails';
import './App.css';
import React from 'react';

 function App() {
  return (
    <div className="App" id='App'>
      <div className='App1'>
        <h1 className='head1'>Student Results</h1>
      </div>
      <div className='display'>
      <div className='App2' ><Studentdetails id="App" studentname="Karthik" studentregno="20CS1028" studentclass="9th" studentsection="A" studentmarks="100" ></Studentdetails></div>
      <div className='App2' ><Studentdetails id="App" studentname="Kajal" studentregno="20CS1032" studentclass="8th" studentsection="A" studentmarks="40" ></Studentdetails></div>
      <div className='App2' ><Studentdetails id="App" studentname="Siva" studentregno="20CS1034" studentclass="9th" studentsection="B" studentmarks="60" ></Studentdetails></div>
      </div>
     </div>
    
  );
  }
  
export default App;
