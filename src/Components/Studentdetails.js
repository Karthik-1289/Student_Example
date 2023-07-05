import React from "react";

function Studentdetails(props){
  console.log(props);
    return(

       props.studentmarks>40?
        <div id="App">
            <h2 className="pass">Pass</h2>
            <h2> Student Name : {props.studentname}</h2>
            <h2> Student Regno : {props.studentregno}</h2>
            <h2> Student Class : {props.studentclass}</h2>
            <h2> Student Section : {props.studentsection}</h2>
            <h2>Student marks : {props.studentmarks} </h2>
             </div> : <div>
             <h2 className="fail">Fail</h2>
            <h2> Student Name : {props.studentname}</h2>
            <h2> Student Regno : {props.studentregno}</h2>
            <h2> Student Class : {props.studentclass}</h2>
            <h2> Student Section : {props.studentsection}</h2>
            <h2>Student marks :  {props.studentmarks} </h2>
            
             </div>
    );
}
export default Studentdetails;