import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_grey">
        <Fade delay={500}>
           <div className="font_righteus footer_logo_venue">Fab's portfolio</div>
           <div className="footer_copyright">
            Fab's portfolio 2018.All rights reserved.
                
           </div> 
        </Fade>
            
        </footer>
    );
};

export default Footer;