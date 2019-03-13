/*
WebsiteReact
Peter Roohr
Overview:
    A Billboard is a special panel that displays billboarditems
*/
import React, {Component} from 'react';
import { Container, Button, Col, Row } from 'reactstrap';

class BillBoard extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>[Current Projects]</h1>
                    </Col>
                </Row>
                <Row>
                {/*Left Button*/}
                    <Col>
                        <Button>
                            Prev Project
                        </Button>
                    </Col>
                {/*content column*/}
                    <Col>
                    
                    </Col>
                {/*right Button*/}
                    <Col>
                        <Button>
                            Next Project
                        </Button>
                    </Col>
                </Row>
            </Container>
        ); 
    }
}
export default BillBoard;