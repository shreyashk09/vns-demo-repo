import React  from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
const AddCourse=()=>{
    return(
        <div style={{padding:30}}>
            <h1>Fill details</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input style={{margin:4}}type="text" placeholder="enter email"
                    name="userName"
                    id="userId"/>
                </FormGroup>
                
                <FormGroup >
                    <label for="courseTitle">Course Title</label>
                    <Input style={{margin:4}}type="text" placeholder="enter Title"
                    name="userTitle"
                    id="Title"/>
                </FormGroup>
                
                <FormGroup >
                    <label for="description">Course Description</label>
                    <Input style={{margin:7}}type="textarea" placeholder="enter Description"
                    name="description"
                    style={{height:200}}
                    id="description"/>
                </FormGroup>
                <Container>
                    <Button color="warning">Add course</Button>
                    <Button style={{marginLeft:10,marginTop:4}}color="success">delete</Button>
                </Container>


            </Form>
            
        </div>

    );

};
export default AddCourse;