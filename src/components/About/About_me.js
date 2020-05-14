import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class About_me extends Component {
    render() {
        return (
            // <div className="center_wrapper">
            //     <div className="discount_wrapper">
                    
            <Container>
                 <Row>
          <Col sm="10" md={{ size: 8, offset: 2 }}><div className="discount_description">
                        <p>Sono un amante dell’ informatica con attitudine al problem solving, mi considero un buon “troubleshooter”.  
                            specializzato in amministrazione di sistema windows/linux  e mi diletto con la programmazione e web design in quanto mi permettono di alimentare la mia passione per l’ arte e creatività.
                            ho una grande passione riguardo la musica,  videogiochi e inoltre mi piace la fotografia, pattinare, basket e cinema.</p>
                    </div></Col>
        </Row>
                    
            </Container>
        );
    }
}

export default About_me;