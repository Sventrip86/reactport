import React from 'react'
import Carrousel from './Carrousel';
import Typing from 'react-typing-animation';

const Home = () => {
    
   
    
    
    return (
        <div style={{position:'relative'}}>

            <Carrousel></Carrousel>

             <div className="artist_name" >
                <div className="wrapper">
                <Typing speed={120}>
                    <span>Hi there ! This is my personal page, </span><br/>
                    <Typing.Delay ms={1000} />

                        <span>written with Reactjs.</span>
                        <Typing.Delay ms={500} />

                        
                    
                </Typing>
                
                

                </div>

                
            </div> 
            

        </div>
    );
};


export default Home;


