import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container, Row, Col } from "reactstrap";
import MyResponsivePie, { ChipsArray } from "./Piechart";
import AssetLo from "./assetLocation";

const CardAsset = () => {
  return (
    <Card>
      <CardContent>
        <Container>
          <Row>
            <Col md={6}>
              <AssetLo />
            </Col>
            <Col md={6}>
              <div  style={{ height: 300,marginTop:-20 }}>
                <MyResponsivePie />
                <div className="text-center"  style={{ marginTop: -190,}}>
                <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: 20,
                    }}
                  >
                    833
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      marginTop:-20                      
                    }}
                  >
                    in total
                  </p>
                  
                </div>
                
              </div>
              <div style={{ marginTop: -40, width: 500, marginLeft:0,overflow:"auto" }}>
                <ChipsArray />
              </div>
            </Col>
          </Row>
        </Container>
      </CardContent>
    </Card>
  );
};
export default CardAsset;
