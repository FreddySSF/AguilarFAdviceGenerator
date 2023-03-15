import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/AdviceGenerator/AdviceGenerator.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import React,{useState} from "react";
import dice from '../../Assets/icon-dice.svg';
import dividerDesktop from '../../Assets/pattern-divider-desktop.svg';
import {getDataAdvice} from '../../Services/DataService';


export default function AdviceGenerator() {
    const [advice, setAdvice] = useState('');

    async function fetchData(){
        const any = await getDataAdvice();
        setAdvice(any);
    }

  return (

    
      <main className="neutral3">
        <Container>
          <Row>
            <Col className="cardPosition">
            
              <Card className="neutral2">
                <p className="secondaryColor">ADVICE #{advice.id}</p>
                <h3 className="primaryColor">"{advice.advice}"</h3>
                <br></br>
                <Col>
                <img className="dividerStyle" src={dividerDesktop} alt="A divider in between the quoted advice and the button."></img>
              </Col>
                <br></br>
               
              </Card>
              <Col>
                <Button onClick={fetchData} className="button">
                <img className="dice" src={dice} alt="a square with four dots."></img>
              </Button>
              </Col>

            
            </Col>
          </Row>
        </Container>
      </main>
  
  );
}
