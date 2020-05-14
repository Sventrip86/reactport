import React, { Component } from 'react';
import Cards from './Cards';

import { Container, Row, Col } from 'reactstrap';




class Works extends Component {

    state ={

        titleName:'',
        workCards:[
            {
                name: "www.zafferanonurazzeddu.it",
                img: require("../../resources/images/zafferaPort.JPG")
            },
            {
                name: "www.fradisminoris.it",
                img: require("../../resources/images/Cattura.JPG")
            },
            {
                name: "www.battoro.it",
                img:'http://fabriziosebis.com/wp-content/uploads/2013/10/Capture2-e1489057972299.jpg'
            }
        ]
    }

    
    render() {

        let workCards = this.state.workCards.map(workCards =>{
            return(
                <Col >
                    <Cards workCards={workCards}/>
                </Col>

            )
        })
        return (
            <div className="bck_black ">

                
             
                        
                              
                        <h1>Works</h1>

           
                    <div>
                        <Container >
                            <Row>
                                {workCards}
                            </Row>
                        </Container>
                    </div>
                
                
                
            </div>
        );
    }
}

export default Works;