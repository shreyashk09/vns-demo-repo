import React from "react"
import { Card, CardBody } from "reactstrap";

function Header({name,head}){

    return(
        <div className="text-center my-3">
            <Card color="warning">
                <CardBody>
                    <h1>Welcome to course Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}
export default Header;