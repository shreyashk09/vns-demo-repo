import React from "react";
import { ListGroup,Alert } from "reactstrap";
import { Link } from "react-router-dom";
const Menu=()=>{
    return(
        <ListGroup> 
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="">
                HOME
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action="">
                AddCourse
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action="">
                ViewCourse
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action="">
                AboutUs
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action="">
                Contact
            </Link>
            
        </ListGroup>
    );

};
export default Menu;