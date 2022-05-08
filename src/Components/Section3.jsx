import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
// import base_url from "./api/bootapi";
import { toast, ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom'

const Section3 =()=>
{
  const base_url = "http://localhost:8080";

   
    useEffect(()=> {
        document.title= "Add Courses";
     }, [])

     const[course, setCourse]= useState({});

     //Form handler Funtion
     const handleForm =(e)=>
     {
        console.log(course)
        postDatatoServer(course);
        e.preventDefault();
     }


     const disable=()=>{
        document.getElementById("section1").disabled=false
        document.getElementById("section2").disabled=false
        document.getElementById("section3").disabled=false
        document.getElementById("section4").disabled=false
        document.getElementById("section5").disabled=true
      }

     // Creating function to post data on the server
     const postDatatoServer=(data)=>
     {
         axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log( "success");
                // toast.success("Data has been added");
            },
            (error)=>
            {
                console.log(error);
                console.log("error");
                // toast.success("Something went wrong");

            }



         )
     }

return (
     
<div className="card">
<Fragment>
<ToastContainer/>
    <h1 className="text-center my-3">Section-3</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
        <label htmlFor="ques1">Question-1</label>
        <Input type="radio" name="ques1" id="q1opt1" 
        onClick={(e)=>{
            setCourse({...course,q1:e.target.id})
        }}></Input>
        Option-1

        <Input type="radio" name="ques1" id="q1opt2" 
        onClick={(e)=>{
            setCourse({...course,q1:e.target.id})
        }}></Input>
        Option-2

        <Input type="radio" name="ques1" id="q1opt3" 
        onClick={(e)=>{
            setCourse({...course,q1:e.target.id})
        }}></Input>
        Option-3

        <Input type="radio" name="ques1" id="q1opt4" 
        onClick={(e)=>{
            setCourse({...course,q1:e.target.id})
        }}></Input>
        Option-4
        </FormGroup>

        <FormGroup>
        <label htmlFor="ques2">Question-2</label>
        <Input type="radio" name="ques2" id="q2opt1" 
        onClick={(e)=>{
            setCourse({...course,q2:e.target.id})
        }}></Input>
        Option-1

        <Input type="radio" name="ques2" id="q2opt2" 
        onClick={(e)=>{
            setCourse({...course,q2:e.target.id})
        }}></Input>
        Option-2

        <Input type="radio" name="ques2" id="q2opt3" 
        onClick={(e)=>{
            setCourse({...course,q2:e.target.id})
        }}></Input>
        Option-3

        <Input type="radio" name="ques2" id="q2opt4" 
        onClick={(e)=>{
            setCourse({...course,q2:e.target.id})
        }}></Input>
        Option-4
        </FormGroup>

        <FormGroup>
        <label htmlFor="ques3">Question-3</label>
        <Input type="radio" name="ques3" id="q3opt1" 
        onClick={(e)=>{
            setCourse({...course,q3:e.target.id})
        }}></Input>
        Option-1

        <Input type="radio" name="ques3" id="q3opt2" 
        onClick={(e)=>{
            setCourse({...course,q3:e.target.id})
        }}></Input>
        Option-2

        <Input type="radio" name="ques3" id="q3opt3" 
        onClick={(e)=>{
            setCourse({...course,q3:e.target.id})
        }}></Input>
        Option-3

        <Input type="radio" name="ques3" id="q3opt4" 
        onClick={(e)=>{
            setCourse({...course,q3:e.target.id})
        }}></Input>
        Option-4
        </FormGroup>

        <FormGroup>
        <label htmlFor="ques4">Question-4</label>
        <Input type="radio" name="ques4" id="q4opt1" 
        onClick={(e)=>{
            setCourse({...course,q4:e.target.id})
        }}></Input>
        Option-1

        <Input type="radio" name="ques4" id="q4opt2" 
        onClick={(e)=>{
            setCourse({...course,q4:e.target.id})
        }}></Input>
        Option-2

        <Input type="radio" name="ques4" id="q4opt3" 
        onClick={(e)=>{
            setCourse({...course,q4:e.target.id})
        }}></Input>
        Option-3

        <Input type="radio" name="ques4" id="q4opt4" 
        onClick={(e)=>{
            setCourse({...course,q4:e.target.id})
        }}></Input>
        Option-4
        </FormGroup>





        <Container className="text-center">
                <Button type ="submit" color="success">Submit</Button>
                <Button type = "reset" color="warning ms-2">Clear</Button>
        </Container>    

    </Form>
    
                
       
</Fragment>
<div>
    This is section 3.
  <Link to="/patSec4"><button onClick={disable}>Completed Section 3</button></Link>
  </div>
</div>

)

}

export default Section3





