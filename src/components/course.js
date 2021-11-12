import React from "react";
import{
    Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from "reactstrap";
const Course =({course})=>{
    return(
        <Card style={{padding:10 ,marginBottom:4}}>
            <CardBody className="text-center" >
                <CardSubtitle>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button  color="primary">
                        Add
                    </Button>
                    <Button style={{marginLeft:10}} color="warning">
                        CheckOut
                    </Button>
                </Container>
            </CardBody>
        </Card>
    );
    
};
export default Course;